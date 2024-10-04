import { AiFillFacebook, AiFillInstagram, AiFillTikTok, AiFillGithub } from "react-icons/ai";
import "../Stylesheets/Social.css"

export const Social = ()=>{
    return(
        <div className="social-container">
            <button
            onClick={()=> window.open("https://www.facebook.com/profile.php?id=61566342826582&mibextid=ZbWKwL")}
            ><AiFillFacebook /> Facebook</button>
            <button
            onClick={()=> window.open("https://www.instagram.com/asalazarweb/profilecard/?igsh=MTlqemM2bjdwczI5eA==")}
            ><AiFillInstagram /> Instagram</button>
            <button onClick={()=> window.open("https://www.tiktok.com/@asalazarweb?_t=8qFPf57VILG&_r=1")}><AiFillTikTok /> TikTok</button>
            <button onClick={()=> window.open("https://github.com/Pipoo-py")}><AiFillGithub/> Github</button>
        </div>
    )
}