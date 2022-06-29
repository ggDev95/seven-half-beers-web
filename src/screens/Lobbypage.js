import React from "react";
import { useNavigate } from "react-router";
import '../style/Lobbypage.css';
import { Lobby } from 'seven-half-beers';
const Lobbypage = () => {
    const navigate = useNavigate()
    const goToGame = () =>{
        navigate('/Gamepage')
    }
    return (
        <Lobby startGameCallback={goToGame}>
        </Lobby>
    )
}

export default Lobbypage