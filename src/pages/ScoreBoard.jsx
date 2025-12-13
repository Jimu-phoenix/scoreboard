import { useState } from "react";
import Counter from '../components/Counter';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../styles/scores.css'

export default function ScoreBoard(){

     const [num1, setNum1] = useState(0);
     const [winner, setWinner] = useState(false);
     const [num2, setNum2] = useState(0);
     const location = useLocation();
     const { team1, team2 } = location.state || {gameObj: {
        team1: 'Team'
     }};

    const increase = (n) => {
        if (n === 1){
            setNum1(num1 + 1)
        }
        else {
            setNum2(num2 + 1)
        }
        console.log(team1)
    }

    const decrease = (n) => {
        if (n === 1){
            setNum1(num1 - 1)
        }
        else {
            setNum2(num2 - 1)
        }
        
    }

    return(

       <div className="container">
         <section className="scoreboard">

            
        <section className="score1">

            <h2>{`Team ${team1}`}</h2>
             
            <button onClick={()=>increase(1)}>+</button>
            <Counter
                value={num1}
                places={[100, 10, 1]}
                fontSize={80}
                padding={5}
                gap={10}
                textColor="white"
                fontWeight={900}
                gradientFrom='transparent'
                gradientTo='transparent'
            />

        <button onClick={()=>decrease(1)}>-</button>
            
        </section>

        <hr />

         <section className="score2">
            <h2>{`Team ${team2}`}</h2>
            <button onClick={()=>increase(2)}>+</button>
            

            <Counter
                value={num2}
                places={[100, 10, 1]}
                fontSize={80}
                padding={5}
                gap={10}
                textColor="white"
                fontWeight={900}
                gradientFrom='transparent'
                gradientTo='transparent'
            />

             <button onClick={()=>decrease(2)}>-</button>
        </section>

        
            
        </section>

        <button><Link to={'/'}>Done</Link></button>
        

       </div>

    )
}