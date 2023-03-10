import React from "react";

function About({image="https://via.placeholder.com/215Links to an external site.", text}){
    return(
            <aside>
                <img src={image} alt="blog logo"></img>
                <p>{text}</p>
            </aside>
    )
}

export default About