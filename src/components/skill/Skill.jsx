import React from "react";
import "./Skill.css";
import abstract from "../../Img/HTML5_logo.png";
import CSS3_logo from "../../Img/CSS3_logo.png";
import Sass_Logo from "../../Img/Sass_Logo.png";
import Bootstrap_logo from "../../Img/Bootstrap_logo.png";
import JavaScript_logo from "../../Img/JavaScript-logo.png";
import React_icon from "../../Img/React-icon.png";

export default function Skill() {
    return (
        <div>
            <section class="skill">
                <h3 id="skill-title" class="d-flex justify-content-center fw-bold">My Skill's</h3>

                <div class="card-cont">
                    <div class="card bg-dark">
                        <img src={abstract} width="120" height="120" id="html" alt="Logo de HTML" />
                        <p>HTML5</p>
                    </div>

                    <div class="card bg-dark">
                        <img src={CSS3_logo} width="100" height="120" id="css" alt="Logo de HTML" />
                        <p>CSS3</p>
                    </div>

                    <div class="card bg-dark">
                        <img src={Sass_Logo} width="120" height="120" id="sass" alt="Logo de HTML" />
                        <p class="lg-text">SASS Compiler</p>
                    </div>

                    <div class="card bg-dark">
                        <img src={Bootstrap_logo} width="120" height="120" id="bootstrap" alt="Logo de HTML" />
                        <p>Bootstrap</p>
                    </div>

                    <div class="card bg-dark">
                        <img src={JavaScript_logo} width="120" height="120" id="JS" alt="Logo de HTML" />
                        <p class="lg-text">JavaScript</p>
                    </div>

                    <div class="card bg-dark">
                        <img src={React_icon} width="135" height="120" id="react" alt="Logo de HTML" className="App-logo"/>
                        <p>React.js</p>
                    </div>
                </div>

            </section>
        </div>
    );
}