import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './backend/Main';

function App() {
  const [count, setCount] = useState("");


  return (
    <>
      {Main().lvlToDice(6, true)}
    </>
  )
}

export default App
