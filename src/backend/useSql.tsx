import type { queryType } from "../types/backendTypes"

const useSql = () => {

    //20X - error with data from FORM
    //30X - error with connection
    //40X - error with query

    const getID = (login: string, password:string):queryType<number> => {
        if(!login) return {isError: true, returnedValue: 201}
        if(!password) return {isError: true, returnedValue: 201}
        return {isError: false, returnedValue: -1}
    }

    return {
        getID
    }
}

export default useSql