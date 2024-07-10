# NestJS Dockerized Movie API Project

This project is a NestJS application with MongoDB, Docker, and Docker Compose. The application includes user authentication and a movie endpoint.

## Prerequisites

- Docker
- Docker Compose

## Setup

### 1. Clone the Repository

```sh
git clone https://github.com/Zairi-Maissene/nestjs-movies-api
cd nestjs-movies-api
````

### 2. Run the Application

```sh
docker-compose up
```

### 3. Sign In to use the Application
Sign in is required to get the JWT token to access the movie endpoint.
You can use one of the examples in the user mock service
```sh
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username": "john", "password": "changeme"}'
```

### 4. Access the Movie Endpoint

```sh
curl -X GET http://localhost:3000/movies -H "Authorization: Bearer <JWT_TOKEN>" -H "Content-Type: application/json"
```
### 5. Enjoy the Application
