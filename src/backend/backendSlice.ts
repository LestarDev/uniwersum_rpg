import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { pagerType, talentType, urlType } from '../types/backendTypes';

// Define a type for the slice state
export interface backendInterface {
  pager: pagerType,
  grafikaURL: string,
  errorMSG: string,
  rasa: string,
  dataRasa: talentType
}

export const diceColumn = ["k3", "k4", "k6", "k8", "k10", "k12", "k20", "k20+k3", "k20+k4"];

export const getError = (error: number): string => {
  const stringError: string = error.toString();
  if(stringError.startsWith("2")) return `error with data from FORM ${
    stringError.endsWith('1') ? '| Wrong LOGIN or PASSWORD' :
    stringError.endsWith('2') ? '| unathorized' :
    ''
  }`;
  if(stringError.startsWith("3")) return `error with connection ${
    stringError.endsWith('1') ? '| MYSQL' :
    ''
  }`;
  if(stringError.startsWith("4")) return `error with request`;
  return `Unknown error nr ${error}`;
}

// Define the initial state using that type
const initialState: backendInterface = {
  pager: "Login",
  grafikaURL: "",
  errorMSG: "",
  rasa: "",
  dataRasa: {
    cecha: 'Ciało',
    nazwa: "",
    typ: "Właściwość",
    value: -1
  }
}

export const backendSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changePager: (state: backendInterface, action: PayloadAction<pagerType>)=>{
      state.pager=action.payload
    },
    setGrafikaURL: (state: backendInterface, action: PayloadAction<urlType>)=>{
      state.grafikaURL=action.payload
    },
    setErrorMSG: (state: backendInterface, action: PayloadAction<number>)=>{
      state.errorMSG=action.payload.toString()+" | "+getError(action.payload);
    },
    setRasa: (state: backendInterface, action: PayloadAction<{
      rasa: string,
      rasaNazwa: string,
      value: number
    }>)=>{
      state.rasa=action.payload.rasa;
      state.dataRasa={
        cecha: "Ciało",
        nazwa: action.payload.rasaNazwa,
        typ: "Rasa",
        value: action.payload.value
      }
    }
  },
})



export const { changePager, setGrafikaURL, setErrorMSG, setRasa } = backendSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const backendRedux = (state: RootState) => state.backend

export default backendSlice.reducer