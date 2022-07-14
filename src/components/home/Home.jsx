import React from "react";
import Contact from "../contact/Contact";
import './Home.css';
import PhotoProfile from "../../Img/PhotoProfile-rm-bg.png";

export default function Home() {
    return (
        <section id="banner" className="banner">
            <div className="container-fluid d-flex align-items-center justify-content-center">
                <div className="banner-content d-flex flex-column align-items-center text-center">
                    <h1 id="title-banner" className="text-uppercase fw-bolder mb-4"><span> Anthony Guekdjian</span></h1>
                    <h1 id="title" className="border-bottom border-primary border-5 pb-4 rounded-bottom">Soy una persona que se motiva si mismo, soy detallista, responsable.<br></br>Me gusta trabajar en equipo y estar continuamente aprendiendo<br></br>sobre nuevas tecnologias del area IT.</h1>
                    <Contact />
                    <a href="#" target="_blank"
                        className="btn-contact-me btn btn-primary text-uppercase fs-5 fw-bolder rounded-pill mt-1">Download CV</a>
                </div>
            </div>
        </section>
    );
}