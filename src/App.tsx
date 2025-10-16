import { useEffect, useState } from 'react'
import './App.css'
import LoginPage from './screens/LoginPage';
import type { playerType } from './types/backendTypes';
import { useSelector } from 'react-redux';

function App() {

  

    const playerX = useSelector((state: any)=>state.player) as playerType;

  return (
    <>
      <LoginPage />
      {playerX.imie}
    </>
  )
}

export default App
