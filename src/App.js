import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//import components
import SearchBar from './components/SearchBar';
import CompanyDisplay from './components/CompanyDisplay';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <div className="search">
            <SearchBar />
          </div>
          <div className="tracked">
            <CompanyDisplay />
          </div>
        </main>
      </div>
    );
  }
}


export default App;
