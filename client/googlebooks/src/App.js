import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import api from "./utils/api"

function App() {
  const [book, setBook] = useState({})
    useEffect(()=> {
      api.getBooks() 
      .then(results=>{
        setBook(results.data)
      })
    },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {book.book}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
