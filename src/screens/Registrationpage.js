import React from "react";
import { useNavigate } from "react-router-dom";

//Components
import { Registration } from 'seven-half-beers'
import { setStorage } from "seven-half-beers/dist/utils/asyncStorage";

const Registrationpage = () => {
    const navigate = useNavigate()
    const responseRegistration = async (resUser, resLogin) => {
        // console.log('resUser', resUser)
        // console.log('resLogin', resLogin)
        await setStorage('user', resLogin.data)
        navigate('/Homepage')
    }
    return (
        <Registration callback={responseRegistration} />
    )
}

export default Registrationpage