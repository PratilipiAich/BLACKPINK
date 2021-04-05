import React from 'react'
import { Col, Image, Row } from "react-bootstrap";
import jennie from "../assets/jennie.jpg"

function Jennie() {
    return (
        <div style={{textAlign:"center"}}>
        <Image src={jennie}/>
            Jennie
        </div>
    )
}

export default Jennie
