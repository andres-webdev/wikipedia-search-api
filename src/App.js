import React from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import logo from './img/wikipedia-logo.png';

function App() {

  return (
    <div className="App">
      <img src={logo} alt='Wikipedia-Logo' />
      <h1>Wikipedia Search</h1>
      <SearchBar />
    </div>
  );
}

export default App;
