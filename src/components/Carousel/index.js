import React, {useState} from "react"
import "./styles.modules.css"

export function Carousel(props) {

    let[carouselNum, setCarouselNum] = useState(0)


    function left() {
        setCarouselNum(carouselNum-1)
        console.log(carouselNum)
    }

    function right() {
        setCarouselNum(carouselNum+1)
        console.log(carouselNum)
    }

    return(
        <div className="carousel">
            <img src={props.images[Math.abs(carouselNum)%4]} alt="carouselImage" className="carouselimage" />
            <div className="buttons">
                <button onClick={left}>Left</button>
                <button onClick={right}>Right</button>
            </div>
        </div>
    )
}