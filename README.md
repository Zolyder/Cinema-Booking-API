# Cine Booking API

## Descripción

Esta API permite la gestión de reservas de un cine. Los usuarios pueden ver la disponibilidad de salas y horarios, crear reservas y consultar la confirmación de sus reservas.

## Tecnologías

- Node.js
- Express.js
- Sequelize
- PostgreSQL

## Instalación

1. Clona el repositorio:
```
   git clone https://github.com/tu_usuario/cine-booking-api.git
   cd cine-booking-api
```

2. Instala las dependencias:
```
npm install
```

3. Crea un archivo .env en la raíz del proyecto con las siguientes variables:

```
DB_DATABASE=tu_base_de_datos
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=tu_host
DB_DIALECT=postgres
PORT=8080
JWT_SECRET=tu_secreto_jwt
```

4. Ejecuta las migraciones y los seeders para inicializar la base de datos:

```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

5. Inicia el servidor:

```
npm run dev
```

## Endpoints
POST /api/v1/bookers/register: Registrar un nuevo usuario
POST /api/v1/bookers/login: Iniciar sesión
GET /api/v1/auditoriums/availability: Ver disponibilidad de salas y horarios
POST /api/v1/bookings: Crear una nueva reserva
GET /api/v1/bookings/:id/confirmation: Obtener confirmación de una reserva

Autor: Luis Carlos Villa Ramírez
