import React from "react"
import { Link } from "react-router-dom"
import '../styles/Lander.css'
export default function Lander(){
    return(
        <section className="lander">
           <div className="content">
                <h1>Welcome <br /> I am Score Keeper!</h1>
                <button><Link to={'/settings'}>New Game</Link></button>
           </div>
           <p>Developed by Vision</p>
        </section>
    )
}