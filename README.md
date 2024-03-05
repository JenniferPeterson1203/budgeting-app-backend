# Budgeting App

Welcome to the Budgeting App! This application helps you manage your finances by providing an intuitive interface to track your transactions.

## Setup Instructions

1. **Clone the Repository**:
   Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/JenniferPeterson1203/project-budgeting-app-frontend.git
   ```

2. **Navigate to the Project Directory**:

   ```
   cd project-budgeting-app-frontend
   ```

3. **Install Dependencies**:
   This project uses npm to manage dependencies. Run the following command to install the necessary packages:

   ```
   npm install
   ```

4. **Environment Variables**:
   Create a `.env` file in the root directory and specify the required environment variables. You'll need to set up environment variables for database connection, secret keys, etc.

5. **Start the Server**:
   Start the Express.js server by running:

   ```
   npm start
   ```

6. **Start the React App**:
   Open a new terminal window, navigate to the client directory, and start the React app:

   ```
   cd client
   npm start
   ```

7. **Access the Application**:
   Once the server and client are running, you can access the Budgeting App by opening your web browser and navigating to `http://localhost:3000`.

## Usage

- **Home Page**: Upon landing on the home page, you'll see your current balance along with a list of transactions. Each transaction displays its name, amount, and date. You can click on a transaction to view more details or delete it.
- **Transaction Details Page**: Clicking on a transaction from the home page will take you to a detailed view where you can see additional information such as the source, category, etc. You also have the option to edit the transaction from this page.

- **New Transaction**: From the home page, you can add a new transaction by clicking the "New Transaction" button. This will take you to a form where you can input the transaction details like name, amount, date, source, and category. After submission, you'll be redirected to the home page where you can see the newly added transaction.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Express.js**: Backend framework for handling server-side logic and API endpoints.
- **React Router**: For routing within the React application.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository, make your changes, and submit a pull request.

## Contact

If you have any questions or concerns, feel free to contact [Jennifer Peterson](https://github.com/JenniferPeterson1203).

Thank you for using the Budgeting App! I hope it helps you manage your finances effectively.
