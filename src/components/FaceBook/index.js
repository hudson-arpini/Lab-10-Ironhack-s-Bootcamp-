import React from "react";
import "./styles.modules.css"
import profiles from "../../data/berlin.json"

export function FaceBook() {

    return(
        <div>
            {profiles.map((profile) => {return(
                <div className="facebookprofile">
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
