# Solvify: Ticket Management Application

Solvify is a web-based application that allows users to manage tickets. It provides functionality for creating, updating, and deleting tickets, as well as viewing ticket details and managing ticket status.

## Features

- Ticket creation: Users can create new tickets by providing necessary information such as title, description, and status.
- Ticket listing: Users can view a list of all tickets with essential details such as title, description, and status.
- Ticket update: Users can update the ticket status.
- Ticket deletion: Users can delete a ticket permanently from the system.

## Technologies Used

- Backend: Node.js, Express.js, MongoDB
- Frontend: HTML, CSS, JavaScript, React.js
- Database: MongoDB

## Installation

1. Clone the repository.
2. Navigate to the project directory: `solvify`
3. Install the dependencies: `npm install`
4. Set up the environment variables:
   - Create a `.env` file in the server directory
   - Add the necessary environment variables (e.g., database connection URL)
5. Start the application: `npm start`
6. Open your web browser and visit: `http://localhost:3000`

## Configuration

In order to run the application, you need to set up the following environment variables:

- `DATABASE_URL`: The URL of the MongoDB database.
- `NODE_ENV`: The environment in which the application is running. Set this to `development` for development and `production` for production.
- `PORT`: The port on which the server will run. The default port is `3000`.

You can set these environment variables in a `.env` file in the root directory of the project.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
