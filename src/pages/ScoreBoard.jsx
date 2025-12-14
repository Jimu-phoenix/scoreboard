import { useState, useEffect } from "react";
import Counter from '../components/Counter';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Winner from "../components/Winner";
import '../styles/scores.css'

export default function ScoreBoard(){

     const [num1, setNum1] = useState(0);
     const [winner, setWinner] = useState('');
     const [showwinner, setShowWinner] = useState(false);
     const [num2, setNum2] = useState(0);
     const location = useLocation();
     const { team1, team2, pointsValue } = location.state || {
        team1: 'Team A',
        team2: 'Team B',
        pointsValue: 1
     };

     const [isDarkMode, setIsDarkMode] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const counterColor = isDarkMode ? 'white' : '#213547';

    const increase = (n) => {
        if (n === 1){
            setNum1(num1 + pointsValue)
        }
        else {
            setNum2(num2 + pointsValue)
        }
        console.log(team1)
    }

    const decrease = (n) => {
        if (n === 1){
            setNum1(num1 - pointsValue)
        }
        else {
            setNum2(num2 - pointsValue)
        }
        
    }


    const getWinner = () => {
        if(num2 > num1){
            setWinner(team2)
        }
        else{
            setWinner(team1)
        }
        setShowWinner(true);
    }

    return(

       <div className="sbcontainer">
         <section className="scoreboard">

            
        <section className="score1">

            <h2>{`Team ${team1}`}</h2>
             
            <button onClick={()=>increase(1)}>+</button>
            <div className="counter">
                 <Counter
                value={num1}
                places={[100, 10, 1]}
                fontSize={115}
                padding={5}
                gap={10}
                textColor={counterColor}
                fontWeight={900}
                gradientFrom='transparent'
                gradientTo='transparent'
            />
            </div>

        <button onClick={()=>decrease(1)}>-</button>
            
        </section>

        <hr />

         <section className="score2">
            <h2>{`Team ${team2}`}</h2>
            <button onClick={()=>increase(2)}>+</button>
            

           <div className="counter"> 
            <Counter
            className = "counter-component"
                value={num2}
                places={[100, 10, 1]}
                fontSize={115}
                padding={5}
                gap={10}
                textColor="white"
                fontWeight={900}
                gradientFrom='transparent'
                gradientTo='transparent'
            /></div>

             <button onClick={()=>decrease(2)}>-</button>
        </section>

        
            
        </section>

       <div className="actions">
         <button onClick={getWinner}>Finish</button>
         <button className="close"><Link to={'/'}>Close</Link></button>
       </div>

       {showwinner && <Winner gamewinner = {winner}/>}
       

       </div>

    )
}