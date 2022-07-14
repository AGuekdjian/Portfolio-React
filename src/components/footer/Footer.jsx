import React from "react";
import Contact from "../contact/Contact";
import './Footer.css';

export default function Footer() {
    return (
        <footer className="text-center text-white bg-dark footer">
            <div className="container">
                <section className="f-nav-bar">
                    <div className="row text-center d-flex justify-content-center pt-5">
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#" className="text-white aside">Home</a>
                            </h6>
                        </div>

                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#skill-title" className="text-white aside">Skill's</a>
                            </h6>
                        </div>

                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#" className="text-white aside">Projects</a>
                            </h6>
                        </div>
                    </div>
                </section>

                <hr className="mt-4" />

                <div className="d-flex align-items-center">
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto">
                        <h6 className="text-uppercase mb-4 font-weight-bold mt-3">Contact</h6>
                        <p><i className="fas fa-home mr-3"></i> Pajas Blancas, Montevideo, Uruguay</p>
                        <p><i className="fas fa-envelope mr-3"></i> anthonyguekdjian@gmail.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 598 098 452 454</p>

                        <Contact />
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 mb-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                        <a
                            className="btn btn-primary btn-floating rounded-circle m-1 twitter"
                            href="https://twitter.com/AGuekdjian19"
                            role="button"
                            target="_blank"
                        ><i className="fab fa-twitter"></i></a>

                        <a
                            className="btn btn-primary btn-floating rounded-circle m-1 instagram"
                            href="https://www.instagram.com/aguekdjian/?hl=es"
                            role="button"
                            target="_blank"
                        ><i className="fab fa-instagram"></i></a>

                        <a
                            className="btn btn-primary btn-floating rounded-circle m-1 linkedin"
                            href="https://www.linkedin.com/in/anthony-guekdjian-44886021b/"
                            role="button"
                            target="_blank"
                        ><i className="fab fa-linkedin-in"></i></a>

                        <a
                            className="btn btn-plight btn-floating rounded-circle m-1 github"
                            href="https://github.com/AGuekdjian"
                            role="button"
                            target="_blank"
                        ><i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center p-3 copy-content">
                <p className="text-white">© 2020 Copyright: All Right Reserved - Anthony Guekdjian</p>
            </div>
        </footer>
    );
}