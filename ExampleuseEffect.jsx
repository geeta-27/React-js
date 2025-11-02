import React, {useEffect, useState} from "react";

function ExampleuseEffect(){
    const [count, setCount]=useState(0);
    const [color, setColor]=useState("green");

    useEffect(()=>{
        document.title=`Count: ${count} ${color}`;
    },[count, color]);
    function addCount(){
        setCount(c=>c+1);
    }
    function removeCount(){
        setCount(c=>c-1);
    }
    function changeColor(){
        setColor(c=>c==="green"? "red" : "green");
    }
    return(<>
        <p>Count: ${count}</p>
        <button onClick={addCount}>ADD</button>
        <button onClick={removeCount}>REMOVE</button><br/>
        <button onClick={changeColor}>ChangeColor</button>
    </>);
}
export default ExampleuseEffect