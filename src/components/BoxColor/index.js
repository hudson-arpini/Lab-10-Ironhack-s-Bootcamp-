import React from "react";
import "./styles.modules.css"

export function BoxColor(props){

    let divStyle = {backgroundColor: `rgb(${props.r},${props.g},${props.b})`}

    return(
        <div className="boxcolor" style={divStyle}>rgb({props.r},{props.g},{props.b}) </div>
    )
}