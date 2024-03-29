import React from 'react'
import ReactDOM from 'react-dom'
import News from './components/pages/News'
import NewsState from './context/news/NewsState'
import Navbar from './components/layout/Navbar'
const App = () => {
    return (
    <NewsState>
      <Navbar />
      <div className="App bg-primary">
        <News />
      </div>
    </NewsState>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))