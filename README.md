# Fastify Microproject Template

This is a minimalistic Fastify template designed for fast development of microservices and APIs. It includes basic configurations and essential structure for starting your Fastify-based microservice project quickly.

## Features

- **Fastify framework** for building web applications and APIs
- Pre-configured **TypeScript** support for type safety
- **ESLint** and **Prettier** for linting and code formatting
- Configurable **environment variables** for development and production environments
- Basic **API route** structure with example endpoints
- Easy integration with **MongoDB** or other databases (optional)
- **Swagger** integration for API documentation (optional)

## Requirements

Before you begin, ensure that you have the following installed:

- **Node.js** (>= 16.x)
- **npm** (>= 7.x)
- **Git** (optional, but recommended for version control)

## Getting Started

Follow these steps to get up and running with the template:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/fastify-microproject-template.git
cd fastify-microproject-template
```

### 2. Install dependencies

Use **npm** or **yarn** to install project dependencies.

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following environment variables:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/your-db
NODE_ENV=development
```

### 4. Run the Project

To run the project in development mode:

```bash
npm run dev
```

For production mode (after building the project):

```bash
npm run build
npm run start
```

### 5. Access API Documentation

If Swagger is enabled, you can access the interactive API documentation at:

```
http://localhost:3000/documentation
```

### 6. Build for Production

To build the project for production:

```bash
npm run build
```

This will transpile the TypeScript code to JavaScript.

## Project Structure

The directory structure of the project is as follows:

```
.
├── src/
│   ├── controllers/           # API route controllers
│   ├── routes/                # Route definitions
│   ├── services/              # Business logic and services
│   ├── utils/                 # Utility functions
│   └── index.ts                 # Fastify server instance
├── .env                       # Environment variables
├── .gitignore                 # Git ignore file
├── package.json               # Project metadata and dependencies
├── tsconfig.json              # TypeScript configuration
├── eslint.json                # ESLint configuration
└── README.md                  # Project documentation
```

## Available Scripts

- **`npm run dev`**: Starts the Fastify server in development mode with hot-reloading.
- **`npm run build`**: Transpiles the TypeScript code to JavaScript for production.
- **`npm run start`**: Starts the Fastify server in production mode.
- **`npm run lint`**: Runs ESLint on the project to check for code quality.
- **`npm run format`**: Formats the codebase using Prettier.

## Contributing

We welcome contributions! To contribute, fork this repository and create a pull request with your changes.

- **Bug reports**: Open an issue with a detailed description of the problem.
- **Feature requests**: Feel free to suggest new features or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Thanks for using the **Fastify Microproject Template**! We hope it speeds up your development process.
