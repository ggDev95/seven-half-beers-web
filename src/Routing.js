import React, { useEffect } from "react"

//Routing
import { Routes, Route } from "react-router-dom"

//Screens
import Homepage from "./screens/Homepage"
import Gamepage from "./screens/Gamepage"
import Loginpage from "./screens/Loginpage"
import Registrationpage from "./screens/Registrationpage"
import LeaderboardPage from "./screens/LeaderboardPage";
import Lobbypage from "./screens/Lobbypage";
import GamepageTwo from "./screens/GamepageTwo"






export default function Routing() {


    return (
        <Routes>
            <Route path="Homepage" element={<Homepage />} />
            <Route path="Gamepage" element={<Gamepage />} />
            <Route path="GamepageTwo" element={<GamepageTwo />} />
            <Route path="Registrationpage" element={<Registrationpage />} />
            <Route path="LeaderboardPage" element={<LeaderboardPage />} />
            <Route path="/" element={<Loginpage />} />
            <Route path="Lobbypage" element={<Lobbypage />} />

        </Routes>
    )
}
