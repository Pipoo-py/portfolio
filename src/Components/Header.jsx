import "../Stylesheets/Header.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Button } from "./Button";

export const Header = ()=>{

    return(
        <header className="header">
            <div className="header-container">
                <div className="header__info-container">
                    <div className="header__logo-container">
                        <img src={require("../Img/logo.png")} alt="AS logo" />
                    </div>
                    <div className="header__title-container">
                        <h1> Alejandro Salazar </h1>
                        <h2> Desarrollador Web <span>Frontend</span> </h2>
                    </div>
                </div>
                    <div className="header__content-container">
                        <p>
                        ¡Hola! Soy un apasionado del <strong>desarrollo web frontend</strong>, comprometido en convertir ideas en experiencias visuales impresionantes. Me especializo en crear proyectos modernos y funcionales con <strong>HTML, CSS, JavaScript y React</strong>. Si buscas un aliado en tu próximo proyecto, ¡hablemos y hagamos algo increíble juntos!.
                        </p>
                    </div>
                    <a href="#contact" style={{ textDecoration: "none"}}>
                        <Button text="Contacto"/>
                    </a>
                    <AiOutlineArrowDown className="arrow-down"/>
                </div>
        </header>
    )
}