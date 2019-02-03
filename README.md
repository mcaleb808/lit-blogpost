# LIT BlogPOST

[![Build Status](https://travis-ci.org/oesukam/lit-blogpost.svg?branch=develop)](https://travis-ci.org/oesukam/lit-blogpost)
[![Coverage Status](https://coveralls.io/repos/github/oesukam/lit-blogpost/badge.svg?branch=develop)](https://coveralls.io/github/oesukam/lit-blogpost?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/218ae4cb97c51bf46d72/maintainability)](https://codeclimate.com/github/oesukam/lit-blogpost/maintainability)

A Mini Project to demonstrate gitflow, restfull design, agile methodology and team work skills
`https://lit-blog.herokuapp.com`

## Get Started

- Clone the repo: `git clone https://github.com/oesukam/lit-blogpost.git`
- Set up dev environment: `duplicate .env.example`
  ```
    PORT=3000
    JWT_SECRET=
    DATABASE_URL=postgresql://username:password@localhost:5432/database
    API_VERSION=v1
  ```
- Create a postgress database rhen setup credentials in .env file
- Install packages:`npm install`
- Run the migration: `npm run db:migrate:seed`
- Run the development server: `npm run dev`

## NPM Scrips

- `npm run test`: Runs the test
- `npm run coveralls`: Runs the test with coveralls (To be used in Travis CI)
- `npm run start`: Start the production version of the app
- `npm run dev`: Starts the development version of the app
- `npm run db:migrate`: Migrate the database (Make sure to have postgress up and running)
- `npm run db:migrate:fresh`: Migrate the database by cleaning dropping all tables
- `npm run dd:migrate:seed`: Migrate and populate tables with dummy data
- `npm run db:seed`: Populate the database with dummy data

## Endpoints

| Endpoint                          | Methods | Functionalities          |
| --------------------------------- | ------- | ------------------------ |
| /api/v1/auth/login                | POST    | Login registered user    |
| /api/v1/auth/signup               | POST    | Register a new User      |
| /api/v1/users/`<userId>`/posts    | GET     | Retrieve user's posts    |
| /api/v1/posts/`<postId>`          | GET     | Retrieve a single post   |
| /api/v1/posts/`<postId>`/publish  | PUT     | Publish a post           |
| /api/v1/posts/`<postId>`/comments | POST    | Comment a post           |
| /api/v1/posts/`<postId>`/         | PUT     | Update a single post     |
| /api/v1/comments/`<postId>/`post  | GET     | Retrieve post's comments |

## Authors

- **Caleb Mugisha**
- **Christian Nshogoza**
- **Daniel Nziranziza**
- **Fabrice Manzi**
- **Olivier Esuka**

## Acknowledgments

- Alpha Ogilo
