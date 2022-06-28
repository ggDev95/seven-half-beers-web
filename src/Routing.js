import React, { useEffect } from "react"

//Routing
import { Routes, Route } from "react-router-dom"

//Screens
import Homepage from "./screens/Homepage"
import Gamepage from "./screens/Gamepage"
import Loginpage from "./screens/Loginpage"



export default function Routing() {


    return (
        <Routes>
            <Route path="Homepage" element={<Homepage />} />
            <Route path="Gamepage" element={<Gamepage />} />
            <Route path="/" element={<Loginpage />} />
        </Routes>
    )
}
