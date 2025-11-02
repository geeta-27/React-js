import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext=()=>createContext();

function ComponentA(){
    const [user, setUser] = useState("You have not done anything!");
    return(<div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={{user, setUser}}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    );
}
export default ComponentA