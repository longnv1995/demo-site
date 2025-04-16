import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Welcome to my website</h3>
      <p>Nice to meet you</p>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 data-testid="heading_pg">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} data-testid="count_btn">
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
