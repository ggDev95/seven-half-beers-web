import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

//Components
import { Home } from "seven-half-beers"
import { removeStorage } from 'seven-half-beers/dist/utils/asyncStorage'
import { getLocalStorage, removeLocalStorage } from '../utils/localstorage'

function Homepage() {

  const navigate = useNavigate()

  const goToPage = (path) => {
    console.log(path)
    navigate('/'+path)
  }
  const logout = async () =>{
    await removeStorage('user')
    navigate('/')
  }

  return (
    <div className="App">
      <Home logoutCallback={logout} goTo={goToPage} />
    </div>
  );
}

export default Homepage;
