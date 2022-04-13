import React from "react";
import "./styles.modules.css"
import Visa from "../../assets/images/visa.png"
import Master from "../../assets/images/master-card.svg"

export function CreditCard(props) {

    let imgSrc = ""
    if (props.type === "Visa"){imgSrc = Visa}
    else {imgSrc = Master}

    let month = props.expirationMonth
    if(month<10){month=`0${month}`}
    let year = props.expirationYear%2000

    let divStyles= {
        color:`${props.color}`,
        backgroundColor:`${props.bgColor}`
    }

    return(
        <div className="card" style={divStyles}>
        <img src={imgSrc} alt="cardtype" className="cardtype"></img>
        <span className="number">.... .... .... {props.number[props.number.length-4]}{props.number[props.number.length-3]}{props.number[props.number.length-2]}{props.number[props.number.length-1]}</span>
        <span className="info"> 
        <span>Expires {month}/{year}</span> 
        <span className="bank">{props.bank}</span> <br />
        <span>{props.owner}</span> 
        </span>
        </div>
    )
}