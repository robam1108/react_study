import { useState } from 'react'

const Counter = ()=>{
    const [conut, setCount] = useState(0);
  
    return (<div>
              <h1>{conut}</h1>
              <button onClick={()=>{
                setCount(conut+1)
              }}>+</button>
            </div>)
}

export default Counter;