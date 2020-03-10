import React from 'react';
import logo from './logo.svg';
import './App.css';
import HuluShow from './Hulu';

function App() {
  let favshow = {
    showTitle: "The Blacklist",
    numberOfSeason: 7,
    genre: "Crime Drama",
    rating: "91% *Rotten Tomatoes*"
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg" className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/The_Blacklist_(TV_series)"
          target="_blank"
          rel="noopener noreferrer"
        >
          "The Blacklist"
        </a>
        <HuluShow show={favshow}></HuluShow>
      </header>
    </div>
  );
}

export default App;
