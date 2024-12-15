# Brainly Backend

This repository contains the backend implementation for the Brainly app, built using modern web development technologies. The stack is designed to ensure scalability, maintainability, and security.

## Tech Stack

**Backend Technologies:**

- **TypeScript**: For strong typing and better developer experience.
- **Express**: Lightweight and fast web framework for building APIs.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **MongoDB**: NoSQL database for flexible and scalable data storage.
- **Zod**: Schema validation library to ensure API and data correctness.
- **Bcrypt**: For securely hashing and verifying passwords.
- **Dotenv**: For managing environment variables securely.
- **Jsonwebtoken**: For generating and verifying JSON Web Tokens (JWT) for authentication.

---

## Features

- **User Authentication**: Secure user registration and login using bcrypt.
- **Data Validation**: API input validation using Zod schemas.
- **MongoDB Integration**: Seamless interaction with a NoSQL database using Mongoose.
- **Environment Variables**: Secure configuration using dotenv.
- **JWT Authentication**: Stateless and secure user sessions using JSON Web Tokens.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Backbiter99/brainly-backend.git
cd brainly-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and populate it with the required variables:

```env
DATABASE_URL=your-mongodb-connection-string
JWT_Password=your-jwt-secret
```

### 4. Run the Application

```bash
npm run dev
```

The backend server will start at `http://localhost:3000`.
