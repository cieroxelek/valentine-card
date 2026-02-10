import {useEffect,useState, } from 'react'
import './App.css'
import frame0 from './assets/svg/pies1.svg'
import frame1 from './assets/svg/pies2.svg'
import frame2 from './assets/svg/pies3.svg'
import frame3 from './assets/svg/pies2.svg'
import frame4 from './assets/svg/blush1.svg'
import frame5 from './assets/svg/blush2.svg'
import frame6 from './assets/svg/blush3.svg'
import frame7 from './assets/svg/blush2.svg'
import frame8 from './assets/svg/almostcry1.svg'
import frame9 from './assets/svg/almostcry2.svg'
let globalFrame=0
function FrameFunction(animState,superState)
{
  let interval=0;
  if(animState==0)
  {
    interval=150;
  }
  if(animState==1)
  {
  interval=80;
  }
  if(animState==2)
  {
  interval=1000;
  }
  const [frame, setFrame] = useState(0)
  useEffect(() => 
  {
    const inter = setInterval(() => {
    setFrame(frame+1)
    }, interval);
    return () => clearInterval(inter);
  })
  if(animState==0)
  {
    globalFrame=frame;
    return frame%4;
  }
  if(animState==1)
  {
    globalFrame=frame;
    return ((frame%4)+4);
  }
  if(animState==2)
  {
    return 8+Math.min(frame - globalFrame,1); 
  }
}
function App() {
  const [count, setCount] = useState(0)
  const [decision, setDecision] = useState(0)
  const frames = [frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9]
  return (
    <>
      <div>
        <a>
          <img src={frames[FrameFunction(count,decision)]} className="logo react" alt="piękny piesek, szkoda że nie widzisz" />
        </a>
      </div>
      <h1>CZY ZOSTANIESZ MOJĄ WALENTYNKĄ?</h1>
      <div className="card">
        <button className="yes" 
        onClick={() => setDecision(1)}
        onMouseEnter={() => setCount(1)}
        onMouseLeave={() => setCount(0)}
        >
          TAK
        </button>
        <button className="no" 
        onClick={() => setDecision(2)}
        onMouseEnter={() => setCount(2)}
        onMouseLeave={() => setCount(0)}
        >
          NIE
        </button>
      </div>
      <p className="read-the-docs">
        Dla pięknej Aleksandy
      </p>
    </>
  )
}

export default App
