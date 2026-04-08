import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"

function RootLayout() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout