# Hotel App - Web Application for Hotel Management

The Hotel App is a full-stack web application built using React.js on the client side and Express.js on the server side.

## Client Side

### Installation
To install the necessary libraries for the client side, navigate to the `client` directory and run the following command:

```bash
npm install
```
## Features

- **Login**: The application has a login feature which allows users to access their accounts. This uses the `axios` library to make a POST request to `http://localhost:9000/check/login` with the user's email and password. If the login is successful, the user is redirected to the dashboard page and a success message is displayed.

- **Register**: New users can register by providing their name, email, and password. This data is sent to `http://localhost:9000/check/register` using a POST request. After successful registration, a success message is displayed.

- **Home/Dashboard**: Once logged in, users are redirected to the home page, which displays a welcome message along with some information stored in Redux state.

## Server Side

### Installation
To install the necessary libraries for the server side, navigate to the `server` directory and run the following command:

```bash
npm install
```
### Technologies Used
The server side of the application utilizes the following technologies:

- **Express.js** :A fast and minimalist web application framework for Node.js.
- **dotenv** : A module that loads environment variables from a .env file into process.env.
- **morgan** :A middleware for logging HTTP requests.
- **cors**:  A middleware for handling Cross-Origin Resource Sharing.
- **body-parser**:  A middleware for parsing incoming request bodies.

### Database
The server is connected to a MongoDB database. Make sure to set up the database connection by providing the MongoDB connection URL in the `.env` file.

### JWT Authentication
The server uses JSON Web Tokens (JWT) for user authentication. There is a `verifyJWT` middleware that checks if the incoming request has a valid JWT and denies access if the token is invalid or not provided. The token is extracted from the 'Authorization' header of the request. If the token is invalid, the middleware responds with a JSON object with the message 'Invalid token!'.

### Routes
The server automatically imports and uses all routes from the `routes` directory. Each route file handles specific functionalities of the application.

### Starting the Server
To start the server, run the following command in the `server` directory:

```bash
node server.js
```
