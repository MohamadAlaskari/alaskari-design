# Database Design for Web Development and Graphic Design Web Application

## Introduction

This document outlines the database design for the Alaskari Design web application. Alaskari Design is a company specializing in web development and graphic design services. The web application requires a robust and efficient database structure to manage various aspects such as user management, project tracking, task assignment, and service offerings.

The database schema includes tables for managing users, roles, job titles, projects, tasks, comments, files, services, and company information. This design ensures that both employees and clients have essential information such as names, contact details, and email addresses. Additionally, it distinguishes between users with accounts (who have usernames and passwords) and those without, providing flexibility in user management.

The following sections describe each table in detail, including the attributes and data types, and outline the relationships between the tables to ensure data integrity and efficient data management.

## Database Schema

### Company Info

The `company_info` table stores information about the company.

- **Table Name**: company_info
- **Attributes**:
  - info_id: INT, Primary Key
  - company_name: VARCHAR(100)
  - slogan: VARCHAR(255)
  - about_us: TEXT
  - contact_email: VARCHAR(100)
  - contact_phone: VARCHAR(20)
  - street: VARCHAR(100)
  - house_number: VARCHAR(10)
  - city: VARCHAR(50)
  - state: VARCHAR(50)
  - postal_code: VARCHAR(10)
  - created_at: TIMESTAMP
  - updated_at: TIMESTAMP

### Users

The `users` table stores information about users of the application.

- **Table Name**: users
- **Attributes**:
  - user_id: INT, Primary Key
  - first_name: VARCHAR(50)
  - last_name: VARCHAR(50)
  - email: VARCHAR(50)
  - contact_phone: VARCHAR(20)
  - street: VARCHAR(100)
  - house_number: VARCHAR(10)
  - postal_code: VARCHAR(10)
  - city: VARCHAR(30)
  - state: VARCHAR(30)
  - role_id: INT, Foreign Key to roles
  - created_at: TIMESTAMP
  - updated_at: TIMESTAMP

### Employees

The `employees` table stores information specific to employees.

- **Table Name**: employees
- **Attributes**:
  - employee_id: INT, Primary Key, Foreign Key to users
  - job_title_id: INT, Foreign Key to job_titles
  - salary: DECIMAL(10,2)
  - created_at: TIMESTAMP
  - updated_at: TIMESTAMP

### Clients

The `clients` table stores information specific to clients.

- **Table Name**: clients
- **Attributes**:
  - client_id: INT, Primary Key, Foreign Key to users
  - created_at: TIMESTAMP
  - updated_at: TIMESTAMP

### Accounts

The `accounts` table stores account-related information for users who have accounts.

- **Table Name**: accounts
- **Attributes**:
  - account_id: INT, Primary Key
  - user_id: INT, Foreign Key to users
  - username: VARCHAR(50)
  - password: VARCHAR(255)
  - created_at: TIMESTAMP
  - updated_at: TIMESTAMP

### Roles

The `roles` table stores the different roles that a user can have, such as admin, employee, or client.

- **Table Name**: roles
- **Attributes**:
  - role_id: INT, Primary Key
  - role_name: VARCHAR(50)

### Job Titles

The `job_titles` table stores different job titles for employees, such as web designer or web developer.

- **Table Name**: job_titles
- **Attributes**:
  - job_title_id: INT, Primary Key
  - job_title_name: VARCHAR(50)

### Projects

The `projects` table stores information about projects managed in the application.

- **Table Name**: projects
- **Attributes**:
  - project_id: INT, Primary Key
  - project_name: VARCHAR(100)
  - description: TEXT
  - start_date: DATE
  - end_date: DATE
  - client_id: INT, Foreign Key to clients
  - created_at: TIMESTAMP
  - updated_at: TIMESTAMP

### Employee Projects

The employee_projects table stores the relationships between employees and the projects they are working on.

- **Table Name**: employee_projects
- **Attributes**:
  - employee_project_id: INT, Primary Key
  - employee_id: INT, Foreign Key to employees
  - project_id: INT, Foreign Key to projects
  - created_at: TIMESTAMP
  - updated_at: TIMESTAMP

### Tasks

The `tasks` table stores information about tasks associated with projects.

- **Table Name**: tasks
- **Attributes**:
  - task_id: INT, Primary Key
  - project_id: INT, Foreign Key to projects
  - task_name: VARCHAR(100)
  - description: TEXT
  - assigned_to: INT, Foreign Key to employees
  - status: VARCHAR(20)
  - created_at: TIMESTAMP
  - updated_at: TIMESTAMP

### Comments

The `comments` table stores comments made on tasks by users.

- **Table Name**: comments
- **Attributes**:
  - comment_id: INT, Primary Key
  - task_id: INT, Foreign Key to tasks
  - user_id: INT, Foreign Key to users
  - content: TEXT
  - created_at: TIMESTAMP
  - updated_at: TIMESTAMP

### Files

The `files` table stores files associated with projects and tasks.

- **Table Name**: files
- **Attributes**:
  - file_id: INT, Primary Key
  - project_id: INT, Foreign Key to projects
  - task_id: INT, Foreign Key to tasks
  - file_name: VARCHAR(255)
  - file_path: VARCHAR(255)
  - uploaded_by: INT, Foreign Key to users
  - created_at: TIMESTAMP
  - updated_at: TIMESTAMP

### Services

The `services` table stores information about the services offered by the company.

- **Table Name**: services
- **Attributes**:
  - service_id: INT, Primary Key
  - service_name: VARCHAR(100)
  - description: TEXT
  - price: DECIMAL(10,2)

### Employee Projects

The `employee_projects` table stores the relationships between employees and the projects they are working on.

- **Table Name**: employee_projects
- **Attributes**:
  - employee_project_id: INT, Primary Key
  - employee_id: INT, Foreign Key to employees
  - project_id: INT, Foreign Key to projects
  - created_at: TIMESTAMP
  - updated_at: TIMESTAMP

## Relationships between Tables

- A user has one role (1:n relationship between `roles` and `users`).
- An account belongs to one user (1:1 relationship between `users` and `accounts`).
- An employee has one job title (1:n relationship between `job_titles` and `employees`).
- A user can be either an employee or a client (1:1 relationship between `users` and `employees` or `clients`).
- A client can have multiple projects, but a project has one main client (1:n relationship between `clients` and `projects`).
- A project can have multiple tasks, but a task belongs to one project (1:n relationship between `projects` and `tasks`).
- A task can have multiple comments, but a comment belongs to one task (1:n relationship between `tasks` and `comments`).
- A task can be assigned to multiple employees (1:n relationship between `tasks` and `employees`).
- A project and a task can have multiple files (1:n relationship between `projects`, `tasks`, and `files`).
- An employee can work on multiple projects, and a project can have multiple employees (n:m relationship between `employees` and `projects` managed through `employee_projects`).


[x] ![ER Diagram](https://your-image-link-here)
