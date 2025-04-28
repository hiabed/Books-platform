import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";

const mainStyle = {
  // minWidth: 1920,
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
    { titre: "The Great Gatsby", auteur: "F. Scott Fitzgerald", année: 1925, image: "book.svg" },
    { titre: "To Kill a Mockingbird", auteur: "Harper Lee", année: 1960, image: "book.svg" },
    { titre: "1984", auteur: "George Orwell", année: 1949, image: "book.svg" },
    { titre: "Pride and Prejudice", auteur: "Jane Austen", année: 1813, image: "book.svg" },
    { titre: "The Hobbit", auteur: "J.R.R. Tolkien", année: 1937, image: "book.svg" },
    { titre: "The Catcher in the Rye", auteur: "J.D. Salinger", année: 1951, image: "book.svg" },
    { titre: "Moby-Dick", auteur: "Herman Melville", année: 1851, image: "book.svg" },
    { titre: "Brave New World", auteur: "Aldous Huxley", année: 1932, image: "book.svg" },
    { titre: "The Lord of the Rings", auteur: "J.R.R. Tolkien", année: 1954, image: "book.svg" },
    { titre: "Crime and Punishment", auteur: "Fyodor Dostoevsky", année: 1866, image: "book.svg" }
  ]);
  // Form state
  const [newBook, setNewBook] = React.useState({
    titre: '',
    auteur: '',
    année: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const bookToAdd = { ...newBook, image: "book.svg" };
    setBooksData(prevBooks => [...prevBooks, bookToAdd]);
    setNewBook({ titre: '', auteur: '', année: '' });
  };

  const deleteBook = (index) => {
    const updatedBooks = booksData.filter((book, bookIndex) => bookIndex !== index);
    setBooksData(updatedBooks);
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
