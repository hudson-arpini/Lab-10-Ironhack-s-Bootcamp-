import React from "react";
import "./styles.modules.css"

export function NumbersTable(props){

    let arr = []
    for(let i=0;i<props.limit;i++){
        arr.push(i+1)
    }

    let squareColor= ['red','white']

    return(
        <div className="blocks">
            {arr.map((el) => <div className="block" style={{backgroundColor: `${squareColor[el%2]}`}}> {el} </div>)}
        </div>
        
    )
}
