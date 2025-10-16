import { useSelector } from "react-redux"
import type { playerType } from "../types/backendTypes"

const MainPage = () => {

    const player = useSelector((state: any)=>state.player) as playerType

    return <div>
        {player.ID}
    </div>
}

export default MainPage