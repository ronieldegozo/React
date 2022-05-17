import React, {useState, useEffect} from "react";
import { CounterStyle } from "./Counter.style";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {

        if (count >= 10){
            //change color
            document.body.style.backgroundColor = "red";
            document.title = "Counter is 10 or more";
            // console.log('Sorry  you reached the Maximun limit');
        }else if(count <= -10){
            document.body.style.backgroundColor = "yellow";

            document.title = "Counter is -10 or less";
            // console.log('Sorry  you reached the Minimun limit');
        }else{
            document.body.style.backgroundColor = "";
            document.title = "Counter is between 0 and 10";

        }
        // document.title = `You clicked ${count} times`;
    });

    return (
        <CounterStyle>
            <div>
                <p>You clicked {count} times</p>
                <p></p>
                <button onClick={() => setCount(count + 1)} disabled={count>= 10} >
                    Increase
                </button>
                <button onClick={() => setCount(count - 1)} disabled={count<= -10}>
                    Decrease
                </button>
            </div>
        </CounterStyle>
    );
}
export default Counter;