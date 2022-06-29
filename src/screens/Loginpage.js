import React, { useEffect } from 'react'

//Routing
import { useNavigate } from "react-router-dom"

//Components
import { Login } from 'seven-half-beers'

//Utils
// import { getLocalStorage, setLocalStorage } from '../utils/localstorage'
import { setStorage, getStorage } from 'seven-half-beers/dist/utils/asyncStorage'

const Loginpage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        checkLogin()
    }, [])
    const checkLogin = async () => {
        // let user = await getStorage('user')
        let user = await getStorage('user')
        console.log(user)
        if (user) {
            navigate('Homepage')
        }
    }
    const getUserInfo = async (params) => {
        await setStorage('user', params.data)
        navigate("Homepage")
    }
    const goToReg = () => {
        navigate('Registrationpage')
    }

    return (
        <Login goToRegistration={goToReg} callback={getUserInfo} />
    )

}

export default Loginpage