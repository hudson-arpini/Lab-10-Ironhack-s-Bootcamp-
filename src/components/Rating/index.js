import React from "react";
import "./styles.modules.css"

export function Rating(props){

    let blackStar = '★'
    let whiteStar = '☆'
    let blackstars = blackStar.repeat(Math.round(props.children))
    let whiteStars = whiteStar.repeat(5-Math.round(props.children))

    return(
        <div className="rating">{blackstars}{whiteStars}</div>
    )
}
