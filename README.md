# Skilly

## Development

Starting postgres container
`docker run -it -p 5432:5432 -e "POSTGRES_USER=sarah" -e "POSTGRES_PASSWORD=connor" -e "POSTGRES_DB=skilly" postgres:latest`

Starting backend
`cd backend && ./mvnw install quarkus:dev`

Starting frontend
`cd frontend && npm start`
