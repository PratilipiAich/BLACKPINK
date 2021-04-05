import React from 'react'
import { Image } from 'react-bootstrap'
//import { Image } from 'react-bootstrap'
import Logo from "../assets/logo.png"
import "../styles/Header.css"

function Header() {
    return (
        <div className="logo-div">
            <a href="/" ><Image className="logo"  src={Logo}/></a>
        </div>
    )
}

export default Header
