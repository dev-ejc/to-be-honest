import React from 'react';
import './App.css';
import NewsState from './context/news/NewsState'
import News from './components/news/News'

function App() {
  return (
    <NewsState>
      <div className="App container">
        <News />
      </div>
    </NewsState>
  );
}

export default App;
