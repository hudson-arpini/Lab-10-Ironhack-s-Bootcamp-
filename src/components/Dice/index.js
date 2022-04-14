import React,{useState} from "react";
import empty from "../../assets/images/dice-empty.png"
import dice1 from "../../assets/images/dice1.png"
import dice2 from "../../assets/images/dice2.png"
import dice3 from "../../assets/images/dice3.png"
import dice4 from "../../assets/images/dice4.png"
import dice5 from "../../assets/images/dice5.png"
import dice6 from "../../assets/images/dice6.png"
import "./styles.modules.css"

export function Dice() {

    const [diceNumber, setDiceNumber] = useState(empty)

    function random() {

        let randomNum = Math.floor(Math.random()*6+1)
        let img = empty
        if(randomNum===1){img=dice1}
        if(randomNum===2){img=dice2}
        if(randomNum===3){img=dice3}
        if(randomNum===4){img=dice4}
        if(randomNum===5){img=dice5}
        if(randomNum===6){img=dice6}

        setDiceNumber(empty)
        setTimeout(()=>{setDiceNumber(img)},1000)
    }


    return (
        <img src={diceNumber} alt="dice" onClick={random} className="dice"/>
    )
}