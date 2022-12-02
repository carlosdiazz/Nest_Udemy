#Defino que Node usare
FROM node:18-alpine as deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install --frozen-lockfile


FROM node:18-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build


FROM node:18-alpine as runner
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install --prod
COPY --from=builder /app/dist ./dist

CMD ["node", "dist/main"]

## # Base image
## FROM node:18-alpine as deps
##
## # Create app directory
## RUN mkdir -p /var/www/pokemon
## WORKDIR /var/www/pokemon
##
## # Bundle app source
## COPY . ./var/www/pokemon
##
## # A wildcard is used to ensure both package.json AND package-lock.json are copied
## COPY package.json pnpm-lock.yaml tsconfig.json tsconfig.build.json /var/www/pokemon/
##
## # Install app dependencies
## RUN npm install
## RUN npm build
##
## #Permisos
## RUN adduser --disabled-password pokeuser
## RUN chown -R pokeuser:pokeuser /var/www/pokemon
## USER pokeuser
##
## # Limpiar el cache
## RUN npm cache clean --force
##
## EXPOSE 3000
##
## # Start the server using the production build
## CMD [ "node", "dist/main.js" ]
