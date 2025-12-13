import { useState } from "react"
import { Link } from "react-router-dom";
import '../styles/winner.css'

export default function Winner(props){

     const [btnState2, setBtnState2] = useState('close');

     const changeClassName = () => {
        setBtnState2('dispose');
     }

    return(

       <div className={`container ${btnState2}`} >
         <div className="winner">
             <img src="https://img.icons8.com/emoji/96/trophy-emoji.png" alt="trophy" />
            <h2>Congratulations!!! <br /> The Winner Is...</h2>
            <h1>{props.gamewinner}</h1>
            <button onClick={changeClassName}><Link to={'/'}>Close</Link></button>
        </div>
       </div>
    )
}