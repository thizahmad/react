import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(0)

  const addVal = () => {
    if(counter < 20) setCounter(counter+1)
  }

  const removeVal = () => {
    if(counter > 0) setCounter(counter-1)
  }
  return ( 
    <div>
      <h1>Counter react App</h1>
      <h2>Count: {counter}</h2>
      <button onClick={addVal}>Increase</button>
      <button onClick={removeVal}>Decrease</button>
    </div>
  )
}

export default App
