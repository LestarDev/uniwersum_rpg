import { useDispatch, useSelector } from "react-redux";
import { setID, setImie } from "../backend/playerSlice";
import { useRef } from "react";
import { changePager } from "../backend/backendSlice";

const LoginPage = () => {


//    const playerX = useSelector((state: any)=>state.player) as playerType;

const dispatch = useDispatch();

    const refLOGIN = useRef<HTMLInputElement>(null);
    const refPASSWORD = useRef<HTMLInputElement>(null);

    return <div>
        <label htmlFor="loginFORM"><input type="text" id="loginFORM" ref={refLOGIN} /></label>
        <label htmlFor="passwordFORM"><input type="password" id="passwordFORM" ref={refPASSWORD} /></label>
        <button onClick={()=>{

            const login = refLOGIN.current!.value;
            const password = refPASSWORD.current!.value;

            if(login=="Akari" && password=="11037"){
                dispatch(setID(2))
                dispatch(changePager("Main"));
            }

        dispatch(setImie("test2"));

        }}>click</button>
    </div>
}

export default LoginPage    