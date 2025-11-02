import React, {useState} from "react";

function UseState(){
    const [name, setName]=useState("Guest");
    const [age, setAge]=useState(0);
    const [isEmployed, setIsEmployee]=useState(false);
    
    const updateName=()=>{
        setName("Munna");
    }
    const updateAge=()=>{
        setAge(age+1);
    }
    const toogleEmployeeStatus=()=>{
        setIsEmployee(!isEmployed);
    }
    
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p>IsEmployee: {isEmployed? "Yes" : "No"}</p>
            <button onClick={toogleEmployeeStatus}>Toogle Status</button>
        </div>
    );
}
export default UseState;