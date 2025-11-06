import { useDispatch, useSelector } from "react-redux";
import { setAddCialo, setAddUmysl, setAddUrok, setCialo, setExp, setID, setImie, setLvl, setTalenty, setUmysl, setUrok } from "../backend/playerSlice";
import { useRef, useState } from "react";
import { changePager, setGrafikaURL, setRasa } from "../backend/backendSlice";
import type { queryType, talentType, urlType } from "../types/backendTypes";
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
                fetch(mainLink+`getPlayerData.php?ID=${numberData}`).then(textData=>textData.text()).then((dataPlayer: string)=>{
                    console.log(dataPlayer);
                    const playerData = dataPlayer.split('|');
                    const lvl = Number(playerData[6])
                    dispatch(setCialo(Number(playerData[0])))
                    dispatch(setUmysl(Number(playerData[1])))
                    dispatch(setUrok(Number(playerData[2])))
                    dispatch(setAddCialo(Number(playerData[3])))
                    dispatch(setAddUmysl(Number(playerData[4])))
                    dispatch(setAddUrok(Number(playerData[5])))
                    dispatch(setLvl(lvl))
                    dispatch(setExp(Number(playerData[7])))
                    dispatch(setGrafikaURL(playerData[8] as urlType))
                    dispatch(setRasa({
                        rasa: playerData[9],
                        rasaNazwa: playerData[10],
                        value: (lvl>=25 ? 6 : Math.floor(lvl/5)+1)
                    }))
                    dispatch(setImie(playerData[11]))
                    fetch(mainLink+`getRaseTalents.php?ID=${numberData}`).then(textTalents=>textTalents.text()).then((dataRaseTalents: string)=>{
                        console.log(dataRaseTalents);
                        const namesOfTalents = dataRaseTalents.split('|');
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
                })
                
            }).catch(()=>{
                backend.throwError(501);
            })

            // dispatch(setID(dataID.returnedValue))
            // dispatch(changePager("Main"));



        }}>click</button>
    </div>
}

export default LoginPage    