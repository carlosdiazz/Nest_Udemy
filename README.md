<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## 1. Description

Esto es una prueba del curso tommado por fernando herrera sobre Nest en Udemy

## 2. Installation Dev
1. Instalar las librerias
```bash
$ pnpm install
```

2. Subir la base de dato
```bash
$ docker-compose up -d
```

## 3. Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## 4. Comandos Basicos del Cli de Nest

- nest -h                           : Ver Comandos de Nest
- nest g mo path/name               : Generar un Modulo
- nest g co path/name               : Generar un Controlador
- nest g pipe path/name             : Generar un Pipe


## 5. Bibliotecas usadas para este projecto
```bash
$ pnpm i uuid
$ pnpm i webpack@^5.0.0
$ pnpm i class-validator class-transformer
$ pnpm i faker@5.5.3
$ pnpm i @nestjs/serve-static
$ pnpm install --save @nestjs/mongoose mongoose
```

## 6. Depedencia de Desarrollo
```bash
$ pnpm i --save-dev @types/uuid
$ pnpm i @types/faker@5.5.9
```
