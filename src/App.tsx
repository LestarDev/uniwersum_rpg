import './App.css'
import LoginPage from './screens/LoginPage';
import MainPage from './screens/MainPage';
import type { playerType } from './types/backendTypes';
import { useSelector } from 'react-redux';

function App() {
    const player = useSelector((state: any)=>state.player) as playerType;

  return (
    <>
      {
        player.ID==-1 ?
        <LoginPage /> :
        <MainPage />
      }
    </>
  )
}

export default App
