<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

Esto es una prueba del curso tommado por fernando herrera sobre Nest en Udemy

## Installation
1. Instalar las librerias
```bash
$ pnpm install
```

2. Subir la base de dato si queremos usarla con Docker
```bash
$ docker-compose up -d
```
## Configurar variables de entornos
Debemos de clonar el archivo ```.env.example``` y crear un archivo ```.env``` con las variables de entornos que se encuentra en el ejemplo anterior.


## Comandos Basicos del Cli de Nest
```bash
$ nest -h                           : Ver Comandos de Nest
$ nest g mo path/name               : Generar un Modulo
$ nest g co path/name               : Generar un Controlador
$ nest g pi path/name               : Generar un Pipe
```

## Bibliotecas usadas para este projecto
```bash
$ pnpm i uuid
$ pnpm i webpack@^5.0.0
$ pnpm i class-validator class-transformer
$ pnpm i faker@5.5.3
$ pnpm i @nestjs/serve-static
$ pnpm i --save @nestjs/mongoose mongoose
$ pnpm i --save @nestjs/axios
$ pnpm i @nestjs/config
$ pnpm i joi
```

## Depedencia de Desarrollo
```bash
$ pnpm i --save-dev @types/uuid
$ pnpm i @types/faker@5.5.9
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```
##### Cree la imagen en docker
```bash
docker-compose -f docker-compose.prod.yaml --env-file .prod.env up --build
```
##### Corro la imagen de docker
```bash
docker-compose -f docker-compose.prod.yaml --env-file .prod.env up -d
```

## Production Build
1. Crear el archivo ```.prod.env```
2. Llenar el aruchi de las variables
3. Crear la nueva imagen con el siguiente comando
  ```docker-compose -f docker-compose.prod.yaml --env-file .prod.env up --build```
4. Ejecutar la imagen
  ```docker-compose -f docker-compose.prod.yaml --env-file .prod.env up -d```
