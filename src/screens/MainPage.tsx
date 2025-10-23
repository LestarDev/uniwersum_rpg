import { useSelector } from "react-redux"
import type { playerType } from "../types/backendTypes"
import chain from "./../assets/druut.svg"
import type { backendInterface } from "../backend/backendSlice";

const MainPage = () => {

    const player = useSelector((state: any)=>state.player) as playerType;

    const backend = useSelector((state: any)=>state.backend) as backendInterface; 

    return <>
        <div className="background-fixed"></div>
        <header className="characterStats">
            <div className="player-main-info">
                <img src={backend.grafikaURL} alt="" />
                <div className="nameRaceAndA">
                    <span>{player.imie}</span>
                    <span>{backend.rasa}</span>
                    <span>{backend.dataRasa.nazwa}</span>
                </div>
                <div className="expLvlHajs">

                </div>
            </div>
            <img src={chain} alt="chain" />
        </header>
    </>
}

export default MainPage