import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
    <NewsState>
      <Navbar />
      <div className="App container">
        <News />
      </div>
    </NewsState>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))