import React from 'react';
import './Menu.css';

export default function Menus() {
    return (
        <div className="nav-container">
                <input type="checkbox" id="check" />
                <label className="button bars" for="check"><i className="fa-solid fa-bars"></i></label>
                <div className="side-bar">
                    <div className="title">
                        <div className="logo">Menu</div>
                        <label className="button cancel" for="check"><i className="fa-solid fa-xmark"></i></label>
                    </div>
                    <ul>
                        <li>
                            <a href="#"><i className="fa-solid fa-house"></i>Home</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa-solid fa-user"></i>About Me</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa-solid fa-briefcase"></i>Portfolio</a>
                        </li>
                        <li>
                            <a href="Forms/form.html"><i className="fa-solid fa-envelope"></i>Contact Me</a>
                        </li>
                    </ul>
                    <div className="media-icons">
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/anthony-guekdjian-44886021b/" target="_blank"><i
                            className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
    );
}