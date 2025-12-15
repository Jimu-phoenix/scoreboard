import React from "react"
import { Link } from "react-router-dom"
import Orb from '../components//Orb';
import '../styles/Lander.css'
export default function Lander(){
    return(
        <section className="lander">
           <div className="content">
                <h1>Welcome <br /> I am Score Keeper!</h1>
                <button><Link to={'/settings'}>New Game</Link></button>
           </div>
           

           <div style={{ width: '100%', height: '600px', position: 'relative', top: '20px' }}>
             <Orb
               hoverIntensity={1.5}
               rotateOnHover={true}
               hue={3}
               forceHoverState={false}
             />
           </div>
           <p>Developed by Vision</p>
        </section>
    )
}