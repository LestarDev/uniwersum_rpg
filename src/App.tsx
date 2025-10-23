import './App.css'
import type { backendInterface } from './backend/backendSlice';
import ErrorPage from './screens/ErrorPage';
import LoginPage from './screens/LoginPage';
import MainPage from './screens/MainPage';
import { useSelector } from 'react-redux';

function App() {
    // const player = useSelector((state: any)=>state.player) as playerType;
    const backend = useSelector((state:any)=>state.backend) as backendInterface;

  return (
    <>
    {backend.pager}
      {
        backend.pager=="Login" ?
        <LoginPage /> :
        backend.pager=="Error" ?
        <ErrorPage /> :
        <MainPage />
      }
    </>
  )
}

export default App
