import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";

const mainStyle = {
  // minWidth: 1920,
  paddingTop: 100,
  width: "100vw",
  minHeight: "900px",
  backgroundColor: "#D7D7D7",
  background: "linear-gradient(90deg,rgba(215, 215, 215, 1) 0%, rgba(215, 215, 215, 1) 57%, rgba(118, 118, 118, 1) 100%)",
  position: "relative",
  overflow: "hidden",
}

const app = {
  width: "100vw",
  display: "flex",
  backgroundColor: "#D7D7D7",
  flexDirection: "column",
  alignItems: "center",
}

function App() {
  const [booksData, setBooksData] = React.useState([
  ]);
  // Form state
  const [newBook, setNewBook] = React.useState({
    titre: '',
    auteur: '',
    année: '',
  });

  // Fetch books data from backend
  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/books");
      const data = await response.json();
      setBooksData(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  React.useEffect(() => {
    fetchBooks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const bookToAdd = { ...newBook, image: "book.svg" };

    // Add new book to the backend
    try {
      const response = await fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookToAdd)
      });

      if (response.ok) {
        fetchBooks(); // Refresh the books list after adding a new book
        setNewBook({ titre: '', auteur: '', année: '' }); // Reset form fields
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const deleteBook = async (index) => {
    try {
      const response = await fetch(`http://localhost:5000/api/books/${index}`, {
        method: "DELETE"
      });

      if (response.ok) {
        fetchBooks(); // Refresh the books list after deleting
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="App" style={app}>
      <div className="navig" style={{backgroundColor: 'black',transition: "all 0.3s ease",}}>
          <a className='nav' href="#main">About</a>
          <a className='nav' href="#Books">Books</a>
      </div>
      <div className='main' id="main" style={mainStyle}>
        <div className='per-infos'>
          <h3 className='hi'><span style={{fontSize: 20,}}>Welcome to our APP 👋</span></h3>
          <h1 className='my-name'>Books library</h1>
          <p className='title'>Manage Your Books Easily with our platform</p>
          <div className="book-form-container">
            <form className="book-form" onSubmit={handleFormSubmit}>
              <h2>Add a New Book</h2>
              <input 
                type="text" 
                name="titre" 
                placeholder="Book Title" 
                value={newBook.titre} 
                onChange={handleInputChange}
                required 
              />
              <input 
                type="text" 
                name="auteur" 
                placeholder="Author" 
                value={newBook.auteur} 
                onChange={handleInputChange}
                required 
              />
              <input 
                type="number" 
                name="année" 
                placeholder="Year" 
                value={newBook.année} 
                onChange={handleInputChange}
                required 
              />
              <button type="submit">Add Book+</button>
            </form>
          </div>
        </div>
      </div>
      <div id="Books" style={mainStyle}>
        <h1 className='list'>Books List</h1>
        <div className='books-container'>
          {booksData.map((book, index) => (
            <div key={index} className="book-card">
              <img style={{width: "100px"}} src={book.image} alt={index} />
              <h2>{book.titre}</h2>
              <p><strong>Author:</strong> {book.auteur}</p>
              <p><strong>Year:</strong> {book.année}</p>
              <button className="delete-btn" onClick={() => deleteBook(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
