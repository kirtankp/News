import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NewsCard from './NewsCard';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>News</h1>
      </header>
      <main className="container mt-4">
        <NewsCard />
      </main>
    </div>
  )
}

export default App;
