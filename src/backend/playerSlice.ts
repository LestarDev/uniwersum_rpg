import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { playerType, talentType } from '../types/backendTypes'
import type { Positive } from '../types/backendTypes'

// Define a type for the slice state


// Define the initial state using that type
const initialState: playerType = {
  ID: -1,
  cialo: 0,
  umysl: 0,
  urok: 0,
  imie: "Error",
  talenty: [],
  addCialo: 0,
  addUmysL: 0,
  addUrok: 0,
  exp: 0,
  lvl: -1,
  gold: 0
}

export const playerSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCialo: (state: playerType, action: PayloadAction<number>) => {
        state.cialo=action.payload
    },
    setUmysl: (state: playerType, action: PayloadAction<number>) => {
        state.umysl=action.payload
    },
    setUrok: (state: playerType, action: PayloadAction<number>) => {
        state.urok=action.payload
    },
    setImie: (state: playerType, action: PayloadAction<string>) => {
        state.imie=action.payload
    },
    setID: (state: playerType, action: PayloadAction<Positive<number>>) => {
        state.ID=action.payload
    },
    setTalenty: (state: playerType, action: PayloadAction<talentType[]>) => {
        state.talenty=action.payload
    },
    setLvl: (state: playerType, action: PayloadAction<number>) => {
      state.lvl=action.payload
    },
    setExp: (state: playerType, action: PayloadAction<number>) => {
      state.exp=action.payload
    },
    setAddCialo: (state: playerType, action: PayloadAction<number>) => {
      state.addCialo=action.payload
    },
    setAddUmysl: (state: playerType, action: PayloadAction<number>) => {
      state.addUmysL=action.payload
    },
    setAddUrok: (state: playerType, action: PayloadAction<number>) => {
      state.addUrok=action.payload
    },
  },
})

export const diceColumn = ["k3", "k4", "k6", "k8", "k10", "k12", "k20", "k20+k3", "k20+k4"];

export const { setCialo, setID, setImie, setTalenty, setUmysl, setUrok, setLvl, setExp, setAddCialo, setAddUmysl, setAddUrok } = playerSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const playerRedux = (state: RootState) => state.player

export default playerSlice.reducer