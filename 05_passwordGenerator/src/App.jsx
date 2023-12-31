import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => { // useCallback returns a memoized callback
    let pass = ""                               // function i.e. it need not be recalculated.
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)     // to update the password
          // here setPassword is just for optimization purpose in order to store it as cache.
  }, [length, numberAllowed, charAllowed, setPassword])

   const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();   // optionally selects the password to avoid null value
      passwordRef.current?.setSelectionRange(0, 51);    // range of characters is selected. 
      window.navigator.clipboard.writeText(password) // <-- this line alone is capable to copy
  }, [password])                                     // the password to clipboard.

  // whenever the page is loaded useEffect is called for the 1st time
  // It is also called whenever any of its dependencies are changed.
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    
    <div className="w-screen max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
              type="range"
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                  setNumberAllowed((prev) => !prev);
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
