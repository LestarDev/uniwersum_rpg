import { useDispatch } from "react-redux";
import { setImie } from "../backend/playerSlice";

const LoginPage = () => {


//    const playerX = useSelector((state: any)=>state.player) as playerType;

const dispatch = useDispatch();

    return <div>
        <button onClick={()=>{
        //    setPlayer({
        //     cialo: 0,
        //     ID: 0,
        //     imie: "x",
        //     talenty: [],
        //     umysl: 0,
        //     urok: 0
        //    });
        // main.editPlayer({
        //     player: player,
        //     setPlayer: setPlayer,
        //     imie: "x"
        // })
        // setPlayer(main.editPlayer_tmp({
        //     player: player,
        //     imie: "y"
        // }))
        // setPlayer((preV)=>{
        //     let tmp = preV;
        //     tmp.imie="x";
        //     return tmp
        // })
        //    console.log(player.imie);

        dispatch(setImie("test2"));

        }}>click</button>
    </div>
}

export default LoginPage    