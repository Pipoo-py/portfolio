import { FaHtml5, FaCss3, FaReact, FaJs } from "react-icons/fa";
import "../Stylesheets/Proyect.css";
import { Button } from "./Button";


export const Proyect = ({ proyectName , description, languages, img, url, personal })=>{


    return(
        <div className="proyect__container">
            <div className="print__container">
                <img src={require(`../Img/${img}`)} alt={proyectName} />
            </div>
            <h4>{ proyectName }</h4>
            <div className="proyect__tags">
                {
                    languages.map(language=>{
                        if(language.toLowerCase() === "html") return <span className="html-span"><FaHtml5 className="lang-icon"/>HTML</span>
                        else if( language.toLowerCase() === "css") return <span  className="css-span"><FaCss3 className="lang-icon"/>CSS</span>
                        else if( language.toLowerCase() === "js") return <span  className="js-span"><FaJs className="lang-icon"/>JavaScript</span>
                        else if( language.toLowerCase() === "react") return <span  className="react-span"><FaReact className="lang-icon"/>React</span>
                        else return null;
                        })
                }
            </div>
            {
                personal === false ? <span className="enterprise-span">EMPRESA</span> : null
            }
            <div className="proyect__description">
                { description  }
            </div>
            <div className="proyect__button-container" onClick={()=> window.open(url)}>
                <Button text="Ir al sitio" />
            </div>
        </div>
    )
}