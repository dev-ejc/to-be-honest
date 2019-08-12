import React from 'react';
import './App.css';
import NewsState from './context/news/NewsState'
import News from './components/news/News'
import Navbar from './components/layout/Navbar'
function App() {
  return (
    <NewsState>
      <Navbar />
      <div className="App container">

        <News />
      </div>
    </NewsState>
  );
}

export default App;
