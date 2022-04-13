import React from "react";
import "./styles.modules.css"

export function DriverCard(props){

    let blackStar = '★'
    let whiteStar = '☆'
    let blackstars = blackStar.repeat(Math.round(props.rating))
    let whiteStars = whiteStar.repeat(5-Math.round(props.rating))

    return(
        <div className="drivercard">
            <img className="imgdriver" src={props.img} alt='profile'></img>
            <div className="infodrivers">
                <span className="name">{props.name}</span>
                <div className="ratingdriver">{blackstars}{whiteStars}</div>
                <span className="car">{props.car.model} - {props.car.licensePlate}</span>
            </div>
        </div>
    )
}