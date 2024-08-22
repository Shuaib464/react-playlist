// import { useState } from 'react'

import { useEffect, useRef, useState } from 'react'
import { useCallback } from 'react';

function App() {
  const [length, setLength] = useState(5);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
      let pass = '';
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      if(numberAllowed) str += '0123456789'
      if(charAllowed) str += '!@#$%^&*(+|)<>?';

      for (let i = 0; i < length; i++) {
          let charIndex = Math.floor(Math.random() * str.length + 1);
          console.log('charInd -: ', charIndex);
          pass += str.charAt(charIndex)        
      }
      setPassword(pass);
  }, [length, numberAllowed, charAllowed]) 

  const copyPasswordToClipboard = () => {
      passwordRef.current?.select();    /// optionally select the passwordRef
      passwordRef.current?.setSelectionRange(0, 15);
      window.navigator.clipboard.writeText(password);
      // NOTE -> we can only access window obj in core react, in next js we cannot access it

  }

  useEffect(() => {
      passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
          <h1 className='text-white text-center py-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input 
                type="text"
                value={password}
                className='outline-none w-full py-1 px-3'
                placeholder='password'
                readOnly
                ref={passwordRef} 
              />
              <button 
              className='outline-none bg-blue-700
               text-white px-3 py-0.5 shrink-0'
               onClick={copyPasswordToClipboard}
               >
                copy
              </button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                type="range"
                min={1}
                max={30}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
                />
              <label>Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type='checkbox'
                className='cursor-pointer'
                onClick={() => setNumberAllowed((prev) => !prev)}
                />
              <label>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type='checkbox'
                className='cursor-pointer'
                onClick={() => setCharAllowed((prev) => !prev)}
                />
              <label>Characters</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
