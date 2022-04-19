import React from "react";
import "./styles.modules.css"
import profiles from "../../data/berlin.json"
import { useState } from "react";

export function FaceBook() {

    const[colorIdx, setColorIdx] = useState(0)
    const colors = ["lightblue","white"]

    function countryClick(event){
        setColorIdx(colorIdx+1)
        event.target.style.backgroundColor = colors[colorIdx%2]
        console.log(event.target.name)
        profiles.map((profile) => {if (profile.country === event.target.name){profile.backColor = `${colors[colorIdx%2]}`}})
    }

    let countries= profiles.map((profile)=>{return profile.country})
    let filteredcountries = countries.filter(function(ele , pos){
        return countries.indexOf(ele) === pos;})

    return(
        <div>

            <ul className="countries">
            {filteredcountries.map((profile)=>{return(
                <li><button onClick={countryClick} style={{backgroundColor: 'white'}} name={profile} key={profile}>{profile}</button></li>
            )})} 
            </ul>

            {profiles.map((profile) => {return(
                <div className="facebookprofile" style={{backgroundColor:`${profile.backColor}`}}>
                    <img src={profile.img} alt="profile img" className="facebookimg" />
                    <div className="facebookinfo">
                        <strong>First Name: </strong>{profile.firstName}<br/>
                        <strong>Last Name: </strong>{profile.lastName}<br/>
                        <strong>Country: </strong>{profile.country}<br/>
                        <strong>Type: </strong>{profile.isStudent? 'Student' : 'Teacher'}
                    </div>
                </div>
            )})}
        </div>
    )
}
