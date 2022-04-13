import React from "react"
import "./styles.modules.css"

export function IdCard(props){
    return(
        <div className="idcard">
            <img className="imgprofile" src={props.picture} alt="profile"></img>
            <div className="infoprofile">
                <strong>First name:</strong> {props.firstName} <br />
                <strong>Last name:</strong> {props.lastName} <br />
                <strong>Gender:</strong> {props.gender} <br />
                <strong>Height:</strong> {props.height/100}m <br />
                <strong>Birth:</strong> {props.birth.toDateString()} <br />
            </div>
        </div>
    )
}