import React from "react";
import "./ToList.css";

const ToList = (props) => {
    //console.log(props.toDo);
    return (
    <ul className="toDo-List">
        {props.toDos.map((toDo) => {
            return <li key={toDo.id}>{toDo.text}</li>;
        })}
    </ul>
    );
};

export default ToList;
