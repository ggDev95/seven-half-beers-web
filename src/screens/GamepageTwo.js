import React, { Component } from "react"

//Library
import { Game } from "seven-half-beers"

//Lottie
import Lottie from "lottie-react"
import Beer from "../assets/lotties/beer.json"

class GamepageTwo extends Component {
    constructor(props) {
        super(props)

        //state
        this.state = {
            counterPrevBeer: 71, //Lottie Frame
            propState: null
        }

        //Ref
        this.myRef = React.createRef([])
    }

    renderPlayer = (player, key) => {
        return (
            <div key={key} style={{
                backgroundColor: 'rgba(61, 52, 25, 0.6)', textAlign: "center", color: "white"
            }}>
                <Lottie
                    ref={el => this.myRef.current[key] = el}
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

    getState = (params) => {
        this.setState({
            ...this.state,
            propState: params
        })
    }

    add = (params) => {
        console.log("Oh fra: ", params)
        console.log("Turno: ", this.state.propState.turns)
        console.log("sta ref: ", this.myRef.current)
        /*   if (isNaN(params)) {
              alert('Loser')
              //myRef.current[state.propState.turns].source(require('../assets/lottie/drunk.json'))
          } else {
              myRef.current[state.propState.turns].play(71, 71 + params)
          } */
    }

    alt = (params) => { }

    render() {
        return (
            <Game
                callback={this.getState}
                addCard={this.add}
                stop={this.alt}
            >
                <div style={{ display: "flex", justifyContent: 'space-around', width: '100vw' }}>
                    {this.state.propState?.infoGiocatori?.user?.map(this.renderPlayer)}
                </div>
            </Game>
        )
    }
}

export default GamepageTwo