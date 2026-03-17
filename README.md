# Backend Server

A RESTful API for user management built with Node.js, Express and MongoDB. Follows a clean MVC architecture with dedicated controllers, models and routes.

## Features

- User CRUD operations via REST endpoints
- MongoDB integration with Mongoose ODM
- Environment-based configuration with dotenv
- CORS-enabled for frontend integration

## Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat)

## Getting Started

### Prerequisites

- Node.js >= 12
- MongoDB instance (local or Atlas)

### Installation

```bash
npm install
```

### Environment variables

Create a `.env` file in the root:

```env
PORT=4000
DB_CNN=mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>
```

### Run locally

```bash
npm start
# Server running at http://localhost:4000
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/usuarios` | Get all users |
| POST   | `/api/usuarios` | Create a user |
| PUT    | `/api/usuarios/:id` | Update a user |
| DELETE | `/api/usuarios/:id` | Delete a user |

## Project Structure

```
├── app.js              # App entry point
├── controllers/
│   └── usuarios.js     # User request handlers
├── models/
│   └── usuario.js      # Mongoose schema
├── routes/
│   └── usuarios.js     # Route definitions
└── database/
    └── config.js       # MongoDB connection
```

## Preview

![Preview](./assets/preview.png)
