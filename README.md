# User Management Application

A CRUD (Create, Read, Update, Delete) web application built with React to manage users using the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/). This application allows users to:
- View a list of users fetched from the API
- Add a new user
- Update user information
- Delete users

The app is responsive and provides an intuitive user interface for managing users.

## Features

1. **Fetch Users**: Displays a list of users fetched from the JSONPlaceholder API, showing their name, email, and phone number.
2. **Create User**: A form allows users to create a new user. This action is simulated by posting to the JSONPlaceholder API.
3. **Update User**: Users can edit existing user details with a pre-filled form, and the changes are sent to the API via a PUT request.
4. **Delete User**: Users can be deleted by clicking the "Delete" button. This action simulates a DELETE request to the API.
5. **Error Handling**: Users are notified if an API request fails.
6. **Responsive Design**: The application is fully responsive, providing a smooth experience across desktop and mobile devices.
7. **Loading Spinner**: While data is being fetched, a spinner is displayed to enhance user experience.

## Technologies Used

- React (Hooks and Functional Components)
- React Router for navigation
- Fetch API for HTTP requests
- CSS for styling

## Setup and Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/) and npm installed on your machine.

### Installation Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/user-management-app.git
   cd user-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application locally:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

## API

This application uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to simulate a real backend. The API endpoints used include:
- `GET /users`: Fetch all users.
- `POST /users`: Create a new user.
- `PUT /users/:id`: Update an existing user.
- `DELETE /users/:id`: Delete a user.


## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder.

  ## Screenshot

   ![Screenshot 2025-01-30 151955](https://github.com/user-attachments/assets/97dc7d7c-73c1-4011-8a3b-77aa0ae652c2)


```
