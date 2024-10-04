import "../Stylesheets/Button.css";


export const Button = ({ text })=>{
    return(
        <div className="button-container">
            <button className="button"><span>{ text }</span></button>
        </div>
    )
}