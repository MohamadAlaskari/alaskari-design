### Detailed Documentation for Server Setup and Configuration

This document provides an in-depth explanation of the server setup and configuration for the Alaskari Design web application. It includes the steps and reasoning behind creating and configuring models, setting up synchronization and drop scripts, and configuring TypeScript for server-side execution.

#### Table of Contents

1. Introduction
2. Server Structure
3. Model Definitions
4. Synchronization Script (`syncModels.ts`)
5. Drop Tables Script (`dropTables.ts`)
6. TypeScript Configuration (`tsconfig.server.json`)
7. Package Scripts (`package.json`)
8. Steps to Run Scripts

---

### 1. Introduction

The Alaskari Design web application requires a well-structured server-side setup to manage database interactions efficiently. This includes defining models for various entities, creating scripts to synchronize and drop tables, and configuring TypeScript for server-side execution.

### 2. Server Structure

The server structure includes the following key directories and files:

- `server/bin/`: Contains executable scripts for tasks such as syncing and dropping tables.
- `server/models/`: Contains Sequelize models representing database schemas.
- `server/config/`: Contains configuration files for the database connection.
- `tsconfig.server.json`: TypeScript configuration file for server-side code.
- `package.json`: Contains project metadata and scripts.

### 3. Model Definitions

Models are defined using Sequelize, which is a promise-based Node.js ORM (Object-Relational Mapping) tool for managing SQL databases. Each model corresponds to a table in the database and defines the schema and relationships for that table.

#### Key Aspects of Model Definitions

- **Sequelize Model Class**: Each model extends Sequelize's `Model` class.
- **Data Types**: Sequelize provides various data types such as `STRING`, `INTEGER`, `DATE`, etc., which are used to define the types of each column in the table.
- **Initialization (`init` Method)**: The `init` method is used to define the schema, including the column names, data types, and constraints.
- **Associations**: Models can be associated with each other using methods like `hasMany`, `belongsTo`, etc., to define relationships such as one-to-many and many-to-many.

### 4. Synchronization Script (`syncModels.ts`)

The synchronization script ensures that all models are created and synchronized with the database. This script runs each model's `sync` method to apply the schema changes to the database.

#### Key Steps in Synchronization Script

1. **Authenticate Connection**: The script first authenticates the database connection using `sequelize.authenticate()`.
2. **Synchronize Models**: It then iterates over each model and calls the `sync` method with the `alter` option. The `alter` option ensures that the database schema is updated to match the models without losing data.
3. **Error Handling**: Any errors during the process are caught and logged to the console.
4. **Close Connection**: Finally, the database connection is closed using `sequelize.close()` to release resources.

### 5. Drop Tables Script (`dropTables.ts`)

The drop tables script deletes all tables from the database. This is useful for resetting the database schema during development or testing.

#### Key Steps in Drop Tables Script

1. **Authenticate Connection**: Similar to the sync script, the drop script first authenticates the database connection.
2. **Drop Tables**: The script iterates over each model and calls the `drop` method to delete the corresponding table. Tables are dropped in the correct order to avoid foreign key constraint issues.
3. **Error Handling**: Any errors during the process are caught and logged to the console.
4. **Close Connection**: The database connection is closed after all tables have been dropped.

### 6. TypeScript Configuration (`tsconfig.server.json`)

The TypeScript configuration file is set up to support server-side execution and ensure compatibility with Node.js.

#### Key Configurations

- **`target`**: Specifies the ECMAScript target version. Set to `ES2022` for modern JavaScript features.
- **`module`**: Specifies the module system to use. Set to `ES2022` for native ES modules.
- **`lib`**: Specifies the library files to include in the compilation. Includes `ES2022` and `dom` for web-related types.
- **`strict`**: Enables strict type-checking options.
- **`esModuleInterop`**: Ensures compatibility with CommonJS modules.
- **`moduleResolution`**: Uses the `bundler` module resolution strategy for modern tooling.
- **`skipLibCheck`**: Skips type checking of declaration files for faster builds.

### 7. Package Scripts (`package.json`)

The `package.json` file includes scripts for running various tasks, such as starting the server, building the project, running tests, and managing database schemas.

#### Key Scripts

- **`start`**: Runs the Angular development server.
- **`build`**: Builds the Angular project.
- **`test`**: Runs the project's tests.
- **`serve:ssr:alaskari-design`**: Runs the server-side rendering (SSR) server.
- **`sync-models`**: Executes the synchronization script to update the database schema.
- **`drop-tables`**: Executes the drop tables script to delete all tables in the database.

### 8. Steps to Run Scripts

To synchronize the models with the database:

```bash
npm run sync-models
```

To drop all tables from the database:

```bash
npm run drop-tables
```

---

This detailed documentation covers the key aspects of the server-side setup and configuration for the Alaskari Design web application. 