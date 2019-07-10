# Skilly

## Development

### Starting postgres container
`docker run -it -p 5432:5432 -e "POSTGRES_USER=sarah" -e "POSTGRES_PASSWORD=connor" -e "POSTGRES_DB=skilly" postgres:latest`

### Starting backend
`cd backend && ./mvnw install quarkus:dev`

### Starting frontend
`cd frontend && npm start`

### Populate fake data
Organizations
```
curl -XPOST -H 'Content-Type: application/json' -d '{ "name": "numergy", "logoUrl": "https://pbs.twimg.com/profile_images/2577211498/doivvokdyalimii9zmc0_400x400.jpeg", "members": [] }' http://localhost:8080/organizations
curl -XPOST -H 'Content-Type: application/json' -d '{ "name": "suricats", "logoUrl": "https://cdn.welcometothejungle.co/uploads/organization/logo/7362/145675/suricats.png", "members": [] }' http://localhost:8080/organizations
curl -XPOST -H 'Content-Type: application/json' -d '{ "name": "teemo", "logoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5racTQ0g8iJiXJG7ZozBqbVjh8YwdUenRSDQgpZV4uMS3TKlX", "members": [] }' http://localhost:8080/organizations
```

Skills
```
curl -XPOST -H 'Content-Type: application/json' -d '{ "name": "Communication" }' http://localhost:8080/organizations/1/skills
curl -XPOST -H 'Content-Type: application/json' -d '{ "name": "Leadership" }' http://localhost:8080/organizations/1/skills
curl -XPOST -H 'Content-Type: application/json' -d '{ "name": "Product Definition" }' http://localhost:8080/organizations/1/skills
curl -XPOST -H 'Content-Type: application/json' -d '{ "name": "Market knowledge" }' http://localhost:8080/organizations/1/skills
```
