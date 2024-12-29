# Second Brain

Second Brain is a full-stack web application. The project is built using modern technologies for both the frontend and backend.

## Project Structure

The project is divided into two main folders:

-   **frontend/**: Contains the React-based frontend code.
-   **backend/**: Contains the Express-based backend code.

## Live Demo

The project is deployed and accessible at:
[https://brainly-dusky.vercel.app/](https://brainly-dusky.vercel.app/)

---

## Tech Stack

### Frontend:

-   **Languages:** TypeScript, JavaScript
-   **Frameworks/Libraries:** React, TailwindCSS, Shadcn (Radix and Lucide-react)
-   **Build Tool:** Vite
-   **State Management:** React Context API
-   **Other Dependencies:**
    -   `@radix-ui/react-dialog`
    -   `@radix-ui/react-dropdown-menu`
    -   `@radix-ui/react-tooltip`
    -   `lucide-react`
    -   `axios`
    -   `react-router-dom`

### Backend:

-   **Languages:** TypeScript, JavaScript
-   **Frameworks/Libraries:** Express
-   **Database:** MongoDB with Mongoose ORM
-   **Validation:** Zod
-   **Authentication:** JSON Web Tokens (jsonwebtoken), Bcrypt
-   **Environment Configuration:** Dotenv

---

## Environment Variables

Ensure the following environment variables are set in your `.env` files:

### Backend:

```
DATABASE_URL=<Your MongoDB connection URL>
JWT_PASSWORD=<Your JWT secret key>
BCRYPT_SALT_ROUNDS=<Number of salt rounds for bcrypt>
```

---

## Setup and Installation

### Prerequisites:

-   Node.js (>=16.x)
-   NPM or Yarn

### Backend:

1. Navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up your `.env` file with the required variables.
4. Start the development server:
    ```bash
    npm run dev
    ```

### Frontend:

1. Navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

---

## Scripts

### Frontend Scripts:

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the frontend for production.
-   `npm run preview`: Previews the production build.

### Backend Scripts:

-   `npm run dev`: Builds and starts the backend server in development mode.
-   `npm run build`: Builds the backend TypeScript code.
-   `npm run start`: Starts the backend server from the built files.

---

## Deployment

### Frontend:

The frontend is deployed on **Vercel**.

-   Link: [https://brainly-dusky.vercel.app/](https://brainly-dusky.vercel.app/)

### Backend:

The backend is deployed on **Render**.

---

## Features

-   User Authentication (Signup, Login)
-   Secure password handling with Bcrypt
-   Token-based authentication with JWT
-   Modular and scalable project structure
-   Responsive UI with TailwindCSS
-   Dialogs, dropdowns, and tooltips implemented using Radix
