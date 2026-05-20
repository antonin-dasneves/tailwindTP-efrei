import femme from "../assets/femme.png"

export default function BgImage(){
    return(
        <img src={femme} alt="femme" className="absolute object-top-right top-0 right-0 -z-1"/>
    );
}