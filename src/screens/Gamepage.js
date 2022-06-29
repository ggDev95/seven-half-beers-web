import React, { useState, useEffect, useRef } from "react"

//Components
import { Game } from "seven-half-beers"

//Lotties
import Lottie from "lottie-react";
import Beer from "../assets/lotties/beer.json"


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Beer,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Gamepage = () => {

    const [state, setState] = useState({
        counterPrevBeer: 71, //Lottie Frame
        propState: null
    })

    //const myRef = useRef([])
    const myRef = useRef(null)

    useEffect(() => {
        //renderPlayers()
    }, [])

    const getState = (params) => {
        setState({
            ...state,
            propState: params
        })
    }

    const renderPlayer = (player, key) => {
        return (
            <div key={key} style={{
                backgroundColor: 'rgba(61, 52, 25, 0.6)', textAlign: "center", color: "white"
            }}>
                <Lottie
                    //ref={el => myRef.current[key] = el}
                    ref={myRef}
                    animationData={Beer}
                    height={100}
                    width={100}
                    loop={false}
                    autoplay={false}
                />
                <p>{player.username} | {player.firstCard}</p>
            </div >
        )
    }


    const add = (params) => {

        console.log("Oh fra: ", params)
        console.log("Turno: ", state.propState.turns)
        console.log("sta ref: ", myRef.current)
        /*   if (isNaN(params)) {
              alert('Loser')
              //myRef.current[state.propState.turns].source(require('../assets/lottie/drunk.json'))
          } else {
              myRef.current[state.propState.turns].play(71, 71 + params)
          } */
    }

    const alt = (params) => { }

    return (
        <Game
            callback={getState}
            addCard={add}
            stop={alt}
        >
            <div style={{ display: "flex", justifyContent: 'space-around', width: '100vw' }}>
                {state.propState?.infoGiocatori?.user?.map(renderPlayer)}
            </div>

        </Game >
    )
}

export default Gamepage