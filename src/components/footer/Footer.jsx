import React from "react";
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

                        <div className="col-auto mt-4">
                            {/* <button type="submit" className="btn btn-outline-info rounded-pill mb-4 fw-bold">
                                Contact Me
                            </button> */}
                            <button type="button" className="btn btn-outline-info rounded-pill mb-4 fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@gmail.com">Contact Me</button>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label for="recipient-name" className="col-form-label">Recipient:</label>
                                                    <input type="text" className="form-control f-input-d-light rounded-3" id="recipient-name"/>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="message-text" className="col-form-label">Message:</label>
                                                    <textarea className="form-control f-input-d-light rounded-3" id="message-text"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-success">Send message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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