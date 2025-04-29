const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json()); // For parsing JSON in request body

// Define the Book model (schema)
const bookSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  auteur: { type: String, required: true },
  année: { type: Number, required: true },
  image: { type: String, default: 'book.svg' }, // Default image if not provided
});

// Create the Book model from the schema
const Book = mongoose.model('Book', bookSchema);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/booksDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Route to add a new book to the database
app.post('/api/books', async (req, res) => {
  const { titre, auteur, année } = req.body;
  const newBook = new Book({ titre, auteur, année });

  try {
    await newBook.save(); // Save the new book to the database
    res.status(201).json(newBook); // Return the new book as response
  } catch (err) {
    res.status(400).json({ message: 'Error adding book', error: err });
  }
});

// Route to get all books from the database
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books from the database
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books', error: err });
  }
});

// Route to update a book by id
app.put('/api/books/:id', async (req, res) => {
  const { id } = req.params;
  const { titre, auteur, année } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, { titre, auteur, année }, { new: true });
    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error updating book", error: err });
  }
});

// Route to delete a book by its ID (not index)
app.delete('/api/books/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id); // Find and delete by ID
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting book', error: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
