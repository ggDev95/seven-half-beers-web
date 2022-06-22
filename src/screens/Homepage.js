import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

//Components
import { Home } from "seven-half-beers"

function Homepage() {

  const navigate = useNavigate()

  const goToPage = (path) => {
    console.log(path)
    navigate("Gamepage")
  }

  return (
    <div className="App">
      <Home goTo={goToPage} />
    </div>
  );
}

export default Homepage;
