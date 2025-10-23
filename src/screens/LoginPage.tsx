import { useDispatch, useSelector } from "react-redux";
import { setID, setImie, setTalenty } from "../backend/playerSlice";
import { useRef, useState } from "react";
import { changePager } from "../backend/backendSlice";
import type { queryType, talentType } from "../types/backendTypes";
import { mainLink } from "../backend/config";
import useBackend from "../backend/useBackend";

const LoginPage = () => {


//    const playerX = useSelector((state: any)=>state.player) as playerType;

const dispatch = useDispatch();

const backend = useBackend();

    const refLOGIN = useRef<HTMLInputElement>(null);
    const refPASSWORD = useRef<HTMLInputElement>(null);

    return <div>
        <label htmlFor="loginFORM"><input type="text" id="loginFORM" ref={refLOGIN} /></label>
        <label htmlFor="passwordFORM"><input type="password" id="passwordFORM" ref={refPASSWORD} /></label>
        <button onClick={async ()=>{

            const login = refLOGIN.current!.value;
            const password = refPASSWORD.current!.value;

            if(!login) backend.throwError(201);
            if(!password) backend.throwError(201);

            fetch(mainLink+`getID.php?login=${login}&password=${password}`).then(v=>v.text()).then((data:string)=>{
                console.log(data);
                const [isError, stringData] = data.split(' ');
                const numberData = Number(stringData);
                if(isError=="error"){
                    backend.throwError(numberData);
                    return;
                }
                if(isError!="connected"){
                    backend.throwError(501);
                    return;
                }
                dispatch(setID(numberData));
                fetch(mainLink+`getRase.php?ID=${numberData}`).then(textTalents=>textTalents.text()).then((data: string)=>{
                    const namesOfTalents = data.split('|');
                    const raceTalents: talentType[] = [];
                    namesOfTalents.forEach(talent=>{
                        raceTalents.push({
                            cecha: "Ciało",
                            nazwa: talent,
                            typ: "Skill",
                            value: 0
                        })
                    })
                    dispatch(setTalenty(raceTalents));
                    dispatch(changePager("Main"));
                })
            }).catch(()=>{
                backend.throwError(501);
            })

            // dispatch(setID(dataID.returnedValue))
            // dispatch(changePager("Main"));


        dispatch(setImie("test2"));

        }}>click</button>
    </div>
}

export default LoginPage    