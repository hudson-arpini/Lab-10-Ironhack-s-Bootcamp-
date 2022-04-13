import React from "react"
import "./styles.modules.css"

export function Greetings(props){
    let greeting = ''
    if(props.lang==='de'){greeting= 'Hallo'}
    if(props.lang==='en'){greeting= 'Hello'}
    if(props.lang==='es'){greeting= 'Hola'}
    if(props.lang==='fr'){greeting= 'Bonjour'}
    return(
        <div className="greetings">
        {greeting} {props.children}
        </div>
    )
}