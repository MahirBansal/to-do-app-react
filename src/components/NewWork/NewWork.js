import React, {useState} from "react";
import "./NewWork.css";

const NewWork = (props) =>{

    const [userInput, setUserInput] = useState('');
    
    const addWorkHandler = event => {
        event.preventDefault();

        const newWork = {
            id: Math.random().toString(),
            text: userInput
        };
        
        setUserInput('');
        //console.log(newWork);
        props.onAddWork(newWork);
    };

    const inputChangeHandler = (event) => {
        setUserInput(event.target.value);
    };

    return(
        <form className="new-work" onSubmit={addWorkHandler} >
            <input type="text" value={userInput} onChange={inputChangeHandler}/>
            <button type="submit">Add to To-Do List</button>
        </form>
    );
}; 
export default NewWork;