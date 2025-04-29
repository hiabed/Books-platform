📚 Books Management Project
🏗️ Architecture

This project is a simple full-stack app to manage a list of books.
It is built with:
Backend: Node.js + Express + MongoDB
Frontend: React.js

You can view, add, edit, and delete books.

API Routes:

GET /api/books → Get all books
POST /api/books → Add a new book
PUT /api/books/:id → Edit an existing book
DELETE /api/books/:id → Delete a book

Database model:

{
  titre: String,
  auteur: String,
  année: Number,
  image: String
}

Example book:

{
  "titre": "The Great Gatsby",
  "auteur": "F. Scott Fitzgerald",
  "année": 1925,
  "image": "book.svg"
}

Frontend (React.js)
Displays the list of books in a responsive and clean way.

Features:

Add a new book using the form provided.
Edit an existing book
Delete a book

* Communicates with the backend using fetch().

the part for displaying books:

    <div className='books-container'>
        {booksData.map((book, index) => (
        <div key={index} className="book-card">
            <img style={{width: "100px"}} src={book.image} alt={index} />
            <h2>{book.titre}</h2>
            <p><strong>Author:</strong> {book.auteur}</p>
            <p><strong>Year:</strong> {book.année}</p>
            <div className='buttons'>
                <button className="edit-btn" onClick={() => editBook(book._id)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteBook(index)}>Delete</button>
            </div>
        </div>
        ))}
    </div>

⚙️ How to run:

Start MongoDB (mongod running locally on default port 27017).
Go to the backend/ folder and run:

1- npm install
2- node server.js

Start your React frontend normally.

📂 Project structure
/backend
  - server.js
  - models/Book.js (schema)
/src
  - app.jsx
  - app.css
  - index.jsx
  - index.css

✨ Notes
The project uses a local MongoDB server (not Atlas, no remote database).
The frontend uses basic prompts for editing (can be improved later).
** NB: My connection was very bad today, so i cannot complet all tasks like docker and hosting the website.
