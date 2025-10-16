import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { pagerType } from '../types/backendTypes';

// Define a type for the slice state
interface initialInterface {
  pager: pagerType
}

export const diceColumn = ["k3", "k4", "k6", "k8", "k10", "k12", "k20", "k20+k3", "k20+k4"];

// Define the initial state using that type
const initialState: initialInterface = {
  pager: "Login"
}

export const backendSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changePager: (state: initialInterface, action: PayloadAction<pagerType>)=>{
      state.pager=action.payload
    }
  },
})



export const { changePager } = backendSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const backendRedux = (state: RootState) => state.backend

export default backendSlice.reducer