import React, {useState} from "react";

function Counter(){
    const [count, setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const reset=()=>{
        setCount(0);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    return(<div className="Count-container">
        <p className="count-display">{count}</p>
        <button className="Counter-button" onClick={decrement}>Decrement</button>
        <button className="Counter-button" onClick={reset}>Reset</button>
        <button className="Counter-button" onClick={increment}>Increment</button>
    </div>
    );
}
export default Counter;