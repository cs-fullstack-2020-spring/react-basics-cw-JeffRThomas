import React from 'react';
import logo from './logo.svg';
import './App.css';

function HuluShow(show) {
  return (
    <div>
      <header>
        <p>When I had a Hulu account, my favorite show to watch was {show.show.showTitle}. So far, the show has run for {show.show.numberOfSeason} seasons. It falls under the category of "{show.show.genre}", and has a rating of {show.show.rating}. You should give it a try. Click the show link above for more information.</p>
      </header>
    </div>
  );
}

export default HuluShow;
