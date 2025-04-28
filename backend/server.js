// backend/server.js
const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
app.use(cors());

app.use(express.json()); // For parsing JSON in request body

// Mock database (in-memory)
let books = [
  { titre: "The Great Gatsby", auteur: "F. Scott Fitzgerald", année: 1925, image: "book.svg" },
  { titre: "To Kill a Mockingbird", auteur: "Harper Lee", année: 1960, image: "book.svg" },
  // Add more books as needed
];

// Route to get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Route to add a new book
app.post('/api/books', (req, res) => {
  const { titre, auteur, année } = req.body;
  const newBook = { titre, auteur, année, image: "book.svg" };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Route to delete a book by index
app.delete('/api/books/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < books.length) {
    books.splice(index, 1);
    res.status(200).json({ message: "Book deleted successfully" });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
