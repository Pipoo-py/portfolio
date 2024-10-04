import './App.css';
import { NavBar } from './Components/NavBar';
import { Header } from "./Components/Header";
import { Proyect } from "./Components/Proyects";
import { ContactUs } from "./Components/Form";
import { Social } from './Components/Social';

const allProyects = [
    {
        proyectName: "Landing Page Pixel 9",
        description: "Sitio web de una sola página que tiene como objetivo promocionar un producto, en este caso, se escogió el Google pixel 9 a modo de ejemplo, desarrollado sin frameworks.",
        url: "https://pipoo-py.github.io/LANDING-PAGE-PIXEL-9/",
        img: "landing.png",
        languages: ["html", "css","js"],
        personal: true,
    },    {
        proyectName: "E-Commerce",
        description: "Página estilo e-commerce (no funcional) cuyos productos son el resultado de una petición a una API, usando React.",
        url: "https://pipoo-py.github.io/e-commerce/",
        img: "e-commerce.png",
        languages: ["html", "css","js","react"],
        personal: true,
    },    {
        proyectName: "Página de clima",
        description: "Sitio que indica el clima de tu ubicación o el que indiques en el cuadro de texto. La información del clima proviene de una API.",
        url: "https://pipoo-py.github.io/weather-app/",
        img: "weather.png",
        languages: ["html", "css","js","react"],
        personal: true,
    },    {
        proyectName: "Twitter clon",
        description: "Imitación visual de Twitter, solo con la funcionalidad de like, retweet y publicar. La información de las publicaciones son el resultado de peticiones a API´s e IA.",
        url: "https://pipoo-py.github.io/twitter-clon/",
        img: "twitter.png",
        languages: ["html", "css","js", "react"],
        personal: true,
    },    {
        proyectName: "Caracol C.A",
        description: "Página web desarrollada para Caracol, C.A. una empresa venezolana veterana en la industria petrolera del país.",
        url: "www.caracol.com.ve",
        img: "caracol.png",
        languages: ["html", "css","js"],
        personal: false,
    },
]

function App() {
    return (
        <div className="App" id='intro'>
            <NavBar />
            <Header />
            <section className="proyects__section" id='proyects'>
                <h2> Proyectos </h2>
                <div className="proyects__container">
                    {
                        allProyects.map(proyect =>
                            <Proyect
                                proyectName={proyect.proyectName}
                                languages={proyect.languages}
                                url={proyect.url}
                                img={proyect.img}
                                personal={proyect.personal}
                                description={proyect.description}
                            />
                        )
                    }
                </div>
            </section>
            <section className="contact__section" id='contact'>
                <h2> Contacto </h2>
                <ContactUs />
            </section>
            <section className="social__section" id='social'>
                <h2> Redes Sociales </h2>
                <Social />
            </section>

            <footer className="footer" style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "1.3rem",
                color: "#f0f0f0",
                justifyContent: "center",
                alignItems: "center",
                padding: "24px",
                marginTop: "64px",
                borderTop: "1px solid #3949ab"
            }}>
                <h3> Alejandro Salazar </h3>
                <h4>Desarrollador Web Frontend</h4>
            </footer>
        </div>
    );
}

export default App;
