import {useEffect,useState, } from 'react'
import './App.css'
import frame1 from './assets/svg/pies1.svg'
import frame2 from './assets/svg/pies2.svg'
import frame3 from './assets/svg/pies3.svg'
import frame4 from './assets/svg/pies2.svg'

function FrameFunction(interval)
{
  const [frame, setFrame] = useState(0)
  useEffect(() => 
  {
    const inter = setInterval(() => {
    setFrame(frame+1)
    }, interval);
    return () => clearInterval(inter);
  })
  return frame;
}
function App() {
  const [count, setCount] = useState(0)
  const frames = [frame1,frame2,frame3,frame4]
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={frames[FrameFunction(200)%4]} className="logo react" alt="piękny piesek, szkoda że nie widzisz" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
