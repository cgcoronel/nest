<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. clonar repo
2. ejecutar `yarn install`
3. tener nest cli instalado `npm install -g @nestjs/cli`
4. levantar la base de datos `docker-compose up -d`
5. clonar el archivo __.env.template__  y renombrarlo __.env__
6. llenar las variables de entorno en .env
7. ejecutar `yarn start:dev`
8. reconstruir la base de datos `get localhost:3000/api/v2/seed`

## stack usado
* mongodb
* nest
