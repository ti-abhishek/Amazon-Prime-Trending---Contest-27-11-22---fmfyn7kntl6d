import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <>
    <h1 id="heading">Amazon Prime: Trending</h1>
      <div>
        <div>
          <h1 data-testid="title">{slides[slideIndex].title}</h1>
          <p data-testid="text">{slides[slideIndex].text}</p>
        </div>
        
        <button data-testid="button-prev" onClick={handlePrevClick} disabled={prevFlag}>Prev</button>
        <button data-testid="button-next" onClick={handleNextClick} disabled={nextFlag}>Next</button>
        <button data-testid="button-restart" onClick={handleRestartClick} disabled={restartFlag}>Restart</button>
    
      </div>
    </>
  )
}


export default App;
