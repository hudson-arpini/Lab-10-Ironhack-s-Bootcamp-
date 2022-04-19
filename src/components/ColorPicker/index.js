import { useState } from "react";
import "./styles.modules.css"

export function ColorPicker() {
    const [rvalue, setRValue] = useState(0)
    const [gvalue, setGValue] = useState(0)
    const [bvalue, setBValue] = useState(0)

    function setRed(event){
        setRValue(event.target.value)
    }

    function setGreen(event){
        setGValue(event.target.value)
    }

    function setBlue(event){
        setBValue(event.target.value)
    }

    return (
    <div className="colorpicker">

        <div className="colorcontainer">
            <div style={{backgroundColor:`rgb(${rvalue},0,0)`, width:'50px', height:'50px'}}></div>
            <label>R: </label>
            <input type='number' onChange={setRed}></input> 
        </div>

        <div className="colorcontainer">
            <div style={{backgroundColor:`rgb(0,${gvalue},0)`, width:'50px', height:'50px'}}></div>
            <label>G: </label>
            <input type='number' onChange={setGreen}></input>
        </div>

        <div className="colorcontainer">
            <div style={{backgroundColor:`rgb(0,0,${bvalue})`, width:'50px', height:'50px'}}></div>
            <label>B: </label>
            <input type='number' onChange={setBlue}></input>
        </div>

        <div className="colorcontainer">
            <div style={{backgroundColor:`rgb(${rvalue},${gvalue},${bvalue})`, width:'50px', height:'50px'}}></div>
            <h3>{`rgb(${rvalue},${gvalue},${bvalue})`}</h3>
        </div>

    </div> );
}
