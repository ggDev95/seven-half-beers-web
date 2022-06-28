import React from 'react'

//Routing
import { useNavigate } from "react-router-dom"

//Components
import { Login } from 'seven-half-beers'

//Utils
import { setStorage } from "seven-half-beers/dist/utils/asyncStorage"

const Loginpage = () => {

    const navigate = useNavigate()

    const getUserInfo = async (params) => {
        await setStorage("user", params.data)
        navigate("Homepage")
    }

    return (
        <Login callback={getUserInfo} />
    )

}

export default Loginpage