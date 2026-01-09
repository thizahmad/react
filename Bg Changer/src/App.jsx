import { useState } from 'react'
import './App.css'
import BodyColor from './components/BodyColor'

// function App() {
//   function handleColor(color){
//     document.body.style.backgroundColor = color
//   }
//   return (
//     <>
//       <div className='flex gap-4 border border-black-500 px-4 py-2 rounded-xl'>
//         {/* <button className='bg-red-500 border border-black-500 px-4 py-2 rounded-xl' onClick={() => handleColor("red")}>Red</button>
//         <button className='bg-blue-500 border border-black-500 px-4 py-2 rounded-xl' onClick={() => handleColor("green")}>Green</button>
//         <button className='bg-green-500 border border-black-500 px-4 py-2 rounded-xl' onClick={() => handleColor("blue")}>Blue</button>
//         <button className='bg-pink-500 border border-black-500 px-4 py-2 rounded-xl' onClick={() => handleColor("pink")}>Pink</button> */}
//         <BodyColor colorName="red"></BodyColor>
//         <BodyColor colorName="blue"></BodyColor>
//         <BodyColor colorName="green"></BodyColor>
//         <BodyColor colorName="yellow"></BodyColor>
//       </div>
//     </>
//   )
// }

function App(){
  const [color, setColor] = useState("white")

  return(
    <div className="w-full h-screen duration-200 flex gap-4 justify-center items-center"
      style={{ backgroundColor: color }}
      >
      <BodyColor color="red" setColor={setColor}>Red</BodyColor>
      <BodyColor color="blue" setColor={setColor}>Blue</BodyColor>
      <BodyColor color="green" setColor={setColor}>Green</BodyColor>
      <BodyColor color="pink" setColor={setColor}>Pink</BodyColor>
  </div>

  )
}

export default App
