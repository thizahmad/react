import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*(){}[]~`+-_"

    for(let i = 1; i <= length; i++){
      let idx = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(idx)
    }
    setPassword(pass)
  }, [numberAllow, charAllow, length, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [numberAllow, charAllow, length, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 text-gray-900 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input 
          type="text"
          value={password}
          readOnly
          placeholder='Password'
          className='outline-none w-full py-1 px-3' 
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-500  text-black
          px-3 py-0.5 shrink-0 active:bg-blue-600
         active:scale-100'
          onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='text-white'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllow}
            id='numberInput'
            onChange={() => {
              setNumberAllow((prev) => !prev)
            }}
            />
            <label className='text-white'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllow}
            id='charInput'
            onChange={() => {
              setCharAllow((prev) => !prev)
            }}
             />
             <label className='text-white'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
