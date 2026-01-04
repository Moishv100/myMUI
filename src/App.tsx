import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 font-sans">
        <h1 className="text-4xl font-bold text-primary-900 mb-8">
          My MUI Design System
        </h1>
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all">
          SaaS Button Works!
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
