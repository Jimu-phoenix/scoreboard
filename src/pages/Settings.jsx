import { useState } from 'react';
import Counter from '../components/Counter';

export default function Settings(){

    const [num, setNum] = useState(0);

    const increase = () => {
        setNum(num + 1);
        console.log(num)
    }

    const decrease = () => {
        setNum(num - 1);
        console.log(num)
    }

    return(
        <section className="settings">
            <button>Back</button>

            
           
        </section>
    )
}