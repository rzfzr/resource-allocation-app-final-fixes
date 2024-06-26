# Specifics about the challenge, would act different otherwise

1. I noticed some inconsistencies on the internationalization files, such as project/projeto being capitalized or not, did not fix this as I expect it would show up as worse results in the tests, so I only fixed what was explicitly asked.
2. .ts files exporting the internationalization objects, have double spacing in many places, I ignored those and saved without formatting for minimal git diff, same with this .md file.
3. Bug #6 was fixed as required in order to comply with the automated tests, ideally there should be different messages for wrong password and unknown email. I also see that email validation isn't actually happening anywhere.
3. Bug #12, the only time I managed to replicate the "Ops, an error occurred" and no data loading was due to a 429 too many requests error. I reasonably raised the main rate limiter.
4. Bug #16, I assume that bug description isn't aplicable anylonger, due to the date being passed, and when it mentions setting the end date to "today", it should be a latter date than what is in record. I also assumed that endDate == null means the assignment is still requiring work, but the business rule could have been the opposite.

# Raally (Resource allocation ally)

Welcome to the Raally project. Raally is an application that helps and simplifies managing people’s allocation on projects. Its purpose is to store information about people such as job title and compensation as well as information about projects and project assignments. With this information Raally can display a dashboard that shows utilization of company’s workforce. 

Raally is a multitenant SaaS application where users can belong to one or many workspaces/tenants either as Company Admin or as a Resource Manager.

# Getting Started

## Backend

The Backend app uses NodeJs v16.15.0 and SQLite, you can add/remove any data that you want, but please don´t change the structure of the database.

### Install Backend Dependencies

In order to install the backend project dependencies run inside the backend folder:

> **npm** install --force

### Running Backend Application

The following command inside the backend folder will run the backend server:

> **npm** start

After this you would be able to access backend at http://localhost:8080. 

## Frontend

The Frontend app also uses NodeJs v16.15.0.

### Install Frontend Dependencies

In order to install the backend project dependencies run inside the frontend folder:

> **npm** install --force

### Running Frontend Application

The following command will run the SPA in local dev server:

> **npm** start

The application will be available at http://localhost:8081 and by default you should see a welcome message there.

## Production Build

In order to prepare production build you need to run in the frontend and in the backend folder the following command:

> **npm** run build

It is important to make sure that code can be built for production succesfully before submitting the solution.

## Default User Setup

The initial database already contains some sample data and you can access it with the following users:

 - **username:** user1@test.com
 - **password:** Test@123

---

 - **username:** user2@test.com
 - **password:** Test@123

---

 - **username:** user3@test.com
 - **password:** Test@123

Each user has access to different workspaces with the following roles:

- user1@test.com
  - Workspace 01 with admin role
  - Workspace 02 with admin role
  - Workspace 03 with admin role

- user2@test.com
  - Workspace 01 with admin role
  - Workspace 02 with resource manager role

- user3@test.com
  - Workspace 04 with admin role


