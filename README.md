# Backend Bookshop

This is a small backend bookshop webpage built using Node.js, EJS view engine, and MySQL database. The webpage allows you to perform various operations such as adding a book, deleting a book, editing book details, and viewing all the books in the inventory.

![Alt Text](./online-shop.png)

## Prerequisites

Before running the application, make sure you have the following installed on your system:

- Node.js: [Download Node.js](https://nodejs.org)
- MySQL: [Download MySQL](https://www.mysql.com/)

## Getting Started

1. Clone the repository to your local machine.

```bash
git clone <repository-url>
```

2. Install the dependencies.

```bash
cd backend-bookshop-webpage
npm install
```

3. Configure MySQL database.

   - Create a new database and import the provided SQL file (`bookshop.sql`) to set up the required tables.

4. Set up environment variables.

   - Create a new file named `.env` in the root of the project.
   - Add the following environment variables in the `.env` file:

```env
DB_HOST=your-mysql-host
DB_USER=your-mysql-username
DB_PASSWORD=your-mysql-password
DB_DATABASE=your-mysql-database
```

Replace `your-mysql-host`, `your-mysql-username`, `your-mysql-password`, and `your-mysql-database` with your actual MySQL database credentials.

5. Start the application.

```bash
npm start
```

6. Open your web browser and visit `http://localhost:3000` to access the backend bookshop webpage.

## Features

- **Add a Book:** You can add a new book to the inventory by providing book details such as title, author, genre, and quantity.

- **Delete a Book:** If a book is no longer available, you can easily delete it from the inventory.

- **Edit Book Details:** If any book details need to be updated, you can edit the book's information like title, author, genre, and quantity.

- **View All Books:** The webpage allows you to view all the books currently available in the bookshop's inventory.

## Technologies Used

- Node.js: JavaScript runtime for server-side development.
- EJS View Engine: Embedded JavaScript templates for rendering dynamic content.
- MySQL: Relational database management system for data storage.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to the creators of Node.js, EJS, and MySQL for providing excellent tools for web development.
