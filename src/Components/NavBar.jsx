import "../Stylesheets/NavBar.css";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const NavBar = ()=>{
    const [ viewMenu, setViewMenu ] = useState(false);

    return(
        <nav className = "nav">
            <div className="nav__container">
                <div className="nav__logo-container">
                    <img src={require("../Img/logo.png")} alt="AS Logo" srcset="" />
                </div>
                <div className="nav__list-container-pc">
                <ul className="nav__mobile-list">
                            <li className="nav__mobile-item">
                                <a href="#intro">
                                    Introducción
                                </a>
                            </li>
                            <li className="nav__mobile-item">
                                <a href="#proyects">
                                    Proyectos
                                </a>
                            </li>
                            <li className="nav__mobile-item">
                                <a href="#contact">
                                    Contacto
                                </a>
                            </li>
                            <li className="nav__mobile-item">
                                <a href="#social">
                                    Redes Sociales
                                </a>
                            </li>
                        </ul>
                </div>
                <div className="nav__menu-container" onClick={()=>{
                    setViewMenu(!viewMenu);
                    }}>
                    {
                        viewMenu ? <AiOutlineClose className="nav-icon" /> : <AiOutlineMenu className="nav-icon" />  
                    }
                </div>
                {
                viewMenu ? (
                    <div className="nav__mobile-menu">
                        <ul className="nav__mobile-list">
                        <li className="nav__mobile-item">
                                <a href="#intro">
                                    Introducción
                                </a>
                            </li>
                            <li className="nav__mobile-item">
                                <a href="#proyects">
                                    Proyectos
                                </a>
                            </li>
                            <li className="nav__mobile-item">
                                <a href="#contact">
                                    Contacto
                                </a>
                            </li>
                            <li className="nav__mobile-item">
                                <a href="#social">
                                    Redes Sociales
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : null
            }
            </div>
        </nav>
    )
}