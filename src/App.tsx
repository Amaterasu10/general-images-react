import { useState } from 'react'
import TopNav from './components/top-nav/TopNav'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <TopNav/>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
