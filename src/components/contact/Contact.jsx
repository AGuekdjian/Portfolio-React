import React from "react";
import './Contact.css';

export default function Contact() {
    return (
        <div className="col-auto mt-4 mb-1">
            <button type="button" className="btn-contact-me btn btn-outline-primary rounded-pill mb-1 text-uppercase fs-5 fw-bolder" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@gmail.com">Contact Me</button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header mb-1 form-nav-bar">
                            <h5 className="modal-title fw-bold text-danger" id="exampleModalLabel">Send me a message</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mb-1">
                            <form action="https://formsubmit.co/ac0fe5c9586936efca8b46f492e9cbc8" method="POST">
                                <div className="form-outline mb-4">
                                    <label className="form-label lab-tag" for="form4Example1">Name</label>
                                    <input type="text" name="Nombre" id="form4Example1" className="form-control f-input-d-light" />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label lab-tag" for="form4Example2">Email address</label>
                                    <input type="email" name="Correo Electronico" id="form4Example2" className="form-control f-input-d-light" required />
                                </div>

                                <div className="form-outline mb-5">
                                    <label className="form-label lab-tag" for="form4Example3">Message</label>
                                    <textarea className="form-control textarea f-input-d-light" name="Mensaje" id="form4Example3" rows="4"></textarea>
                                </div>
                                <div className="modal-footer mb-1">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success">Send message</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}