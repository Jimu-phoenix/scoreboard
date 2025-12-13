import { useState } from 'react';
import Counter from '../components/Counter';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Settings.css'

export default function Settings(){

    
    const [type, setType] = useState('');
    const navigate = useNavigate();


    const changeType = (newType) => {
        setType(newType);
    }
    const submitForm = (e) => {
        e.preventDefault();
        console.log('Submitted')
        console.log(e.target.Team1.value)
        console.log(e.target.Team2.value)
        let gameObj = {
            team1: e.target.Team1.value,
            team2: e.target.Team2.value
        }
        navigate('/scores', { state: {
            team1: e.target.Team1.value,
            team2: e.target.Team2.value
        } })
    }

    return(
        <section className="settings">

            <div className="top">
                <button><Link to={'/'}>Back</Link></button>
                <h1>Settings</h1>
            </div>

            <div className="specSet">

                {/* Competition Type */}
                <section className="compType">

                    <h2>Competition Type</h2>
                    <div className="types">
                        <button onClick={() => changeType('2t')}>2 Teams</button>
                        <button onClick={() => changeType('1v1')}>1 v 1</button>
                        <button onClick={() => changeType('p2')}> 2+ Players</button>
                    </div>
                </section>

                 <hr /> 

                {/* Specific Settings */}
                {type === '2t'? 
                <div className="t2">
                    <h2>Points per Round</h2>
                    <div className="options">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>5</button>
                    </div>
                    <form className="teamNames" id='teamNames' onSubmit={(e) => submitForm(e)}>

                        <h3>Names</h3>

                        <div className="TeamxName">
                            <label htmlFor="Team1">Team 1</label>
                            <input type="text" name='Team1' id='Team1'/>
                        </div>

                        <div className="TeamxName">
                            <label htmlFor="Team2">Team 2</label>
                            <input type="text" name='Team2' id='Team2'/>
                        </div>

                        <button type="submit" className='done'>Done</button>

                    </form>
                </div> : 
                type === '1v1'? 
                <div className="ovo">
                     <h2>Points per Round</h2>
                        <div className="options">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>5</button>
                        </div>
                </div> : 
                <div className="p2">
                    <h1>2+ Or More Players</h1>
                    <h2>Coming Soon!</h2>
                </div>
                
                }


            </div>

           
        </section>
    )
}