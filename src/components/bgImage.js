import yellow from "../assets/yellow-bg.webp"
import old from "../assets/old.png"

export default function BgImage(){
    return(
        <div className="-z-10">
            <img src={yellow} alt="yellow" className="absolute top-0 right-0 "/>
            <img src={old} alt="c'est moi" className="absolute top-36 right-48 w-96 h-auto -z-5"/>
        </div>
    );
}