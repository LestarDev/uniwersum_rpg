import { useSelector } from "react-redux"
import type { playerType } from "../types/backendTypes"
import chain from "./../assets/druut.svg"
import type { backendInterface } from "../backend/backendSlice";
import lvl from "./../assets/LVL.svg";
import exp from "./../assets/EXP.svg";
import coin from "./../assets/pieniazek.svg"

const MainPage = () => {

    const player = useSelector((state: any)=>state.player) as playerType;

    const backend = useSelector((state: any)=>state.backend) as backendInterface; 

    console.log(player)

    return <>
        <div className="background-fixed" />
        <header className="characterStats">
            <div className="player-main-info">
                <img src={backend.grafikaURL} alt="Avatar" />
                <div className="nameRaceAndA">
                    <span>{player.imie}</span>
                    <span>{backend.rasa}</span>
                    <span>{backend.dataRasa.nazwa}</span>
                </div>
                <div className="expLvlHajs">
                    <div>
                        <div>
                            <span>{player.lvl}</span>
                        </div>
                        <img src={lvl} alt="lvl" />
                    </div>
                    <div>
                         <div>
                            <span>{player.exp}</span>
                        </div>
                        <img src={exp} alt="lvl" />
                    </div>
                    <div>
                         <div>
                            <span>{player.gold}</span>
                        </div>
                        <img src={coin} alt="lvl" />
                    </div>
                </div>
            </div>
            <img src={chain} alt="drut" />
        </header>
    </>
}

export default MainPage