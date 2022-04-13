import React from "react";
import "./styles.modules.css"

export function Random(props){
    let randomNum = Math.floor((Math.random() * (props.max-props.min)) + props.min)
    return(
        <div className="random">
            <span>Random value between {props.min} and {props.max} = {randomNum} </span>
        </div>
    )
}