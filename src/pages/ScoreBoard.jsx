import { useState } from "react";

export default function ScoreBoard(){

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
        <section className="score">
             <button onClick={decrease}>-</button>

            <Counter
                value={num}
                places={[100, 10, 1]}
                fontSize={80}
                padding={5}
                gap={10}
                textColor="white"
                fontWeight={900}
                gradientFrom='transparent'
                gradientTo='transparent'
            />

            <button onClick={increase}>+</button>
        </section>
    )
}