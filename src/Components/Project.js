import React, { useState } from "react";
import '../StyleSheets/Projects.css';

const Project = (props) => {
    return (
        <a href={props.url} target="_blank">
            <div class="project">
                <h2>{props.title}</h2>
                <img src={ props.image } alt={props.alt} />
                {(props.image2 != null) && <img src={ props.image2 } alt={props.alt2} />}
                <p>{props.description}</p>
            </div>
        </a>
    );
};
export default Project;