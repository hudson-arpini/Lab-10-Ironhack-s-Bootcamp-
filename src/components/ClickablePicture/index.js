import React, {useState} from "react"
import noGlasses from "../../assets/images/maxence.png"
import glasses from "../../assets/images/maxence-glasses.png"
import "./styles.modules.css"

export function ClickablePicture(props) {

    const [src, Setsrc] = useState(noGlasses)

    function setImg() {
        if(src === noGlasses){Setsrc(glasses)} 
        if(src === glasses){Setsrc(noGlasses)}
    }

    return(
        <img src={src} alt="maxence" onClick={setImg} className="clickable" />
    )

}