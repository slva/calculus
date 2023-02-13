import { useState } from 'react';
import DadesObertes from './components/DadesObertes'

import './App.css';

function getNum() {
  return Math.floor(Math.random() * 9) + 1
}

function validator(a, b) {
  return a * b
}

function App() {
  const [count, setCount] = useState(0)
  const [great, setGreat] = useState(0)

  const a = getNum()
  const b = getNum()

  function handleKey(e) {
    if (e.keyCode === 13) {
      const val = document.getElementById("result").value
      if (validator(a, b) === parseInt(val)) {
        setGreat(great + 1)
      }
      setCount(count + 1)
      document.getElementById("result").value = ""
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6">
      <div className='text-center shadow-inner border border-slate-600 relative bg-slate-800 px-6 pt-10 pb-8 ring-1 ring-blue-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
        <header className="items-center">
          <h1 className="text-4xl font-bold text-sky-300">
            Calculus
          </h1>
          </header>
          <section>
            <div>Operacions {count}</div>
            <div>{count-great}❌ {great}✨</div>
          </section>
          <div className='text-sky-300 text-9xl font-bold pt-10'>
            {a} x {b} = 
            <input className="focus:outline-none w-36 bg-blue-900/5" id="result" onKeyDown={handleKey}></input> 
          </div>
          <DadesObertes />
        </div>
    </div>
  )
}

export default App;
