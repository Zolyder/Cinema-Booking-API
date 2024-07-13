# Cinema Booking API

## Descripción

Esta API permite la gestión de reservas de un cine. Los usuarios pueden ver la disponibilidad de salas y horarios, crear reservas y consultar la confirmación de sus reservas.

## Tecnologías

- Node.js
- Express.js
- Sequelize
- PostgreSQL
- Docker
- APIDoc

## Instalación

1. Clona el repositorio:
```
   git clone https://github.com/tu_usuario/cine-booking-api.git
   cd cine-booking-api
```

2. Configuración del entorno
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

```
NODE_ENV=development
DB_DATABASE=cinema-db
DB_USERNAME=admin
DB_PASSWORD=admin
DB_HOST=cinema-db
DB_DIALECT=postgres
DB_PORT=5432
PORT=8080
JWT_SECRET=tu_secreto_jwt
```

Crea un archivo .env.test para el entorno de pruebas:

```
NODE_ENV=test
DB_DATABASE=cinema-test-db
DB_USERNAME=adminTest
DB_PASSWORD=adminTest
DB_HOST=cinema-test-db
DB_DIALECT=postgres
DB_PORT=5433
PORT=8080
JWT_SECRET=tu_secreto_jwt
```
3. Instala las dependencias:
```
npm install
```

4. Ejecuta las migraciones y los seeders para inicializar la base de datos:

```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

5. Configuración de Docker
Configura y levanta los contenedores Docker:
```
docker-compose up --build
```

  5.1 Para correr las pruebas de integracion con los servicios de docker, haz el siguiente cambio en el archivo config/config.json:
  ```
    "test": {
      "username": "adminTest",
      "password": "adminTest",
      "database": "cinema-test-db",
      "host": "localhost",
      "dialect": "postgres",
      "port": 5433
    },
  ```
  Cambiarás "host": "cinema-test-db" por -> "host": "localhost", una vez hecho esto podrás correr las pruebas con el comando:
  ```
  npm test
  ```

6. Configuración manual
Si deseas iniciar el proyecto de maneral manual (sin docker), haz los siguientes pasos:

  6.1 Crea las bases de datos de postgres de acuerdo a las variables de entorno

  6.2 Ejecuta las migraciones y los seeders para inicializar la base de datos (opcional, si no usas Docker para esto):
  ```
  npx sequelize-cli db:migrate
  npx sequelize-cli db:seed:all
  ```

  6.3 Iniciar el servidor
  ```
  npm run dev
  ```

  6.4 Correr pruebas de integración (importante crear una base de datos de pruebas para probar el código)
  ```
  npm test
  ```

1. Documentación de la API
La documentación de la API está disponible en http://localhost:8080/api-docs si estás usando APIDoc.

Generar documentación con APIDoc:
Ejecuta el siguiente comando para generar la documentación:
```
npm run apidoc
```

## Endpoints
GET /api/v1/api-docs: Para ver documentación más a detalle de los endpoints
POST /api/v1/bookers/register: Registrar un nuevo usuario
POST /api/v1/bookers/login: Iniciar sesión
GET /api/v1/auditoriums/availability: Ver disponibilidad de salas y horarios
POST /api/v1/bookings: Crear una nueva reserva
GET /api/v1/bookings/:id/confirmation: Obtener confirmación de una reserva

### Autor: Luis Carlos Villa Ramírez
