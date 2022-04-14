import React from "react"
import { useState } from "react"
import "./styles.modules.css"

export function Likebutton() {

    const [likes , setLikes] = useState(0)
    let like = ''
    if(likes === 1){like = 'Like'}
    else{like = 'Likes'}

    function acresc (){
        setLikes(likes +1)
    }

    let colors = ['purple','blue','green','yellow','orange','red']

    return(
        <button className="likebutton" onClick={acresc} style={{backgroundColor: `${colors[likes%6]}`}}> {likes} {like}</button>
    )

}