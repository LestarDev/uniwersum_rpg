const Main = () => {

    const diceColumn = [3, 4, 6, 8, 10, 12];

    const lvlToDice = (diceLvl: number, isFrom3 = false): string => {
        const whole: number = Math.floor(diceLvl/6);
        const odds: number = diceLvl%6;
        if (isFrom3 && diceLvl > 6) return "Error, Formt k3-k12 może być mxymalnie do k12";
        const arrTODO: string[] = Array(whole).fill(isFrom3 ? "k12" : "k20");
        if (odds!=0) arrTODO.push(
            "k" + String(isFrom3 ? diceColumn[odds-1] : diceColumn[odds])
        );
        return arrTODO.join("+");
    }

    return {
        lvlToDice
    }

}

export default Main