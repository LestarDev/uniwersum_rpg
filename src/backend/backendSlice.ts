import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { pagerType, urlType } from '../types/backendTypes';

// Define a type for the slice state
interface initialInterface {
  pager: pagerType,
  grafikaURL: string
}

export const diceColumn = ["k3", "k4", "k6", "k8", "k10", "k12", "k20", "k20+k3", "k20+k4"];

export const getError = (error: number): string => {
  const stringError: string = error.toString();
  if(stringError.startsWith("2")) return `error with data from FORM ${
    stringError.endsWith('1') ? '| Wrong LOGIN or PASSWORD' :
    ''
  }`;
  if(stringError.startsWith("3")) return "error with connection";
  if(stringError.startsWith("4")) return "error with request";
  return `Unknown error nr ${error}`;
}

// Define the initial state using that type
const initialState: initialInterface = {
  pager: "Login",
  grafikaURL: ""
}

export const backendSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changePager: (state: initialInterface, action: PayloadAction<pagerType>)=>{
      state.pager=action.payload
    },
    setGrafikaURL: (state: initialInterface, action: PayloadAction<urlType>)=>{
      state.grafikaURL=action.payload
    }
  },
})



export const { changePager } = backendSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const backendRedux = (state: RootState) => state.backend

export default backendSlice.reducer