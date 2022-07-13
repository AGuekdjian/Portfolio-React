import React from "react";
import './Home.css';
import PhotoProfile from "../../Img/PhotoProfile-rm-bg.png";

export default function Home() {
    return (
        <section id="banner" className="banner">
            <div className="container">
                <div className="row align-items-center justify-content-between mb-5">
                    <div className="col-lg-6 col-md-12 text-center mb-5">
                        <div className="banner-content mx-5">
                            <h1 id="title-banner" className="text-uppercase fw-bolder mb-4"><span> Anthony Guekdjian</span></h1>
                            <h1 id="title" className="border-bottom border-primary border-5 pb-4 rounded-bottom">No se que poner aca pero lo que vaya a ir aca va a estar super cheto!!</h1>
                            <a href="#" target="_blank"
                                className="btn-contact-me btn btn-primary text-uppercase fs-3 fw-bolder mt-5 rounded-pill">Contact me</a>
                            <a href="#" target="_blank"
                                className="btn-contact-me btn btn-primary text-uppercase fs-3 fw-bolder mt-5 rounded-pill">Download CV</a>
                        </div>
                    </div>
                    <div className="img-content col-lg-5" data-mdb-toggle="animation" data-mdb-animation-reset="false"
                        data-mdb-animation="zoom-in">
                        <img src={PhotoProfile} alt="Photo Profile by Anthony Guekdjian"
                            className="img-fluid mt-5" />
                    </div>
                </div>
            </div>
        </section>
    );
}