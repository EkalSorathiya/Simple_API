# Simple API Project

This project is an Express API that demonstrates:

- CRUD endpoints for users
- Validation middleware for user data
- Middleware usage (logging + authentication)

## Setup

1. Install dependencies:

```bash
npm install
```

2. (Optional) set environment variable:

```bash
export API_KEY=classroom-secret
```

3. Start server:

```bash
npm start
```

Server default URL: `http://localhost:3000`

## Endpoints

### Health

- `GET /`

### Users CRUD

- `GET /users` - List users
- `GET /users/:id` - Get one user
- `POST /users` - Create user (requires `x-api-key`)
- `PUT /users/:id` - Update user (requires `x-api-key`)
- `DELETE /users/:id` - Delete user (requires `x-api-key`)

## Request Body Validation

For `POST /users` and `PUT /users/:id`, required JSON body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 24
}
```

Validation rules:

- `name`: string, minimum length 2
- `email`: valid email format
- `age`: number between 0 and 120

## Middleware Included

- Logging middleware: `morgan("dev")`
- Authentication middleware: checks `x-api-key`
- Validation middleware: checks user payload fields
- Error-handling middleware: catches server errors

## Rubric Mapping

- GitHub repository: create your own repo and push these files
- CRUD endpoints: implemented in `src/routes/userRoutes.js`
- Copilot debugging: document your own debugging steps in your submission notes
- Validation: implemented in `src/middleware/validateUserMiddleware.js`
- Middleware: logging and authentication implemented in `src/app.js` and `src/middleware/authMiddleware.js`
