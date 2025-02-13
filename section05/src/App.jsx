import './App.css'
import { useState } from 'react'

function App() {
  const [conut, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={()=>{
        setLight(light === "ON" ? "OFF" : "ON")
      }}>{light ==="ON"? "끄기":"켜기"}</button>
    </div>
    <div>
      <h1>{conut}</h1>
      <button onClick={()=>{
        setCount(conut+1)
      }}>+</button>
    </div>
    </>
  )
}

export default App
