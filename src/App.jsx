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
import frame10 from './assets/svg/crying1.svg'
import frame11 from './assets/svg/crying2.svg'
import frame12 from './assets/svg/crying3.svg'
import frame13 from './assets/svg/crying4.svg'
import frame14 from './assets/svg/crying5.svg'
import frame15 from './assets/svg/crying6.svg'
import frame16 from './assets/svg/crying7.svg'
import frame17 from './assets/svg/crying8.svg'
import frame18 from './assets/svg/crying9.svg'
import frame19 from './assets/svg/love1.svg'
import frame20 from './assets/svg/love2.svg'
import frame21 from './assets/svg/loveloop1.svg'
import frame22 from './assets/svg/loveloop2.svg'
import frame23 from './assets/svg/loveloop3.svg'
import frame24 from './assets/svg/loveloop2.svg'
let globalFrame=0
let globalLoop=0
function FrameFunction(animState,superState)
{
  let interval=0;
  if(superState==1)
  {
    if(globalLoop<2)
    {
      interval=100;
    }
    else interval=75;
  }
  else if(superState==2)
  {
    interval=500;
  }
  else if(animState==0)
  {
    interval=150;
  }
  else if(animState==1)
  {
  interval=80;
  }
  else if(animState==2)
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
  if(superState==1)
  {
    globalLoop=globalLoop+0.5;
    if(globalLoop<3)
    {
      return globalLoop+18;
    }
    else return 21+(frame%4);
  }
  else if(superState==2)
  {
    globalLoop=globalLoop+0.5;
    if(globalLoop<10)
    {
      return globalLoop+8;
    }
    else return 17+(frame%2);
  }
  else if(animState==0)
  {
    globalFrame=frame;
    return frame%4;
  }
  else if(animState==1)
  {
    globalFrame=frame;
    return ((frame%4)+4);
  }
  else if(animState==2)
  {
    return 8+Math.min(frame - globalFrame,1); 
  }
}
function preloadSvgs(urls)
{
  return Promise.all(
    urls.map(
      (url) =>
        new Promise ((resolve,reject) => {
          const img = new Image();
          img.onload = () => resolve(url);
          img.onerror = reject;
          img.src = url;
        })
      )
    );
}
function App() {
  const [count, setCount] = useState(0)
  const [decision, setDecision] = useState(0)
  const [ready, setReady] = useState(0)
  const frames = [frame0,frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9,frame10,frame11,frame12,frame13,frame14,frame15,frame16,frame17,frame18,frame19,frame20,frame21,frame22,frame23,frame24];
  useEffect(() => {
    preloadSvgs(frames)
    .then(() => setReady(1))
    .catch(console.error)
    });
  return (
    ready&&<>
      <div>
        <a>
          <img src={frames[FrameFunction(count,decision)]} className="logo react" alt="piękny piesek, szkoda że nie widzisz" />
        </a>
      </div>
      <h1>CZY ZOSTANIESZ MOJĄ WALENTYNKĄ?</h1>
      <div className="card">
        {
        decision==1&&<h2>
        OMG SUPER, NIE MOGĘ SIĘ DOCZEKAĆ RANDKI
        </h2>
        }
        {
        decision==2&&<h2>
        :c szkoda. mam nadzieję, że chociaż ci się ta kartka spodobała  
        </h2>
        }
        {
        decision==0&&<button className="yes" 
        onClick={() => setDecision(1)}
        onMouseEnter={() => setCount(1)}
        onMouseLeave={() => setCount(0)}
        >
        TAK
        </button>
        }
        {
        decision==0&&<button className="no" 
        onClick={() => setDecision(2)}
        onMouseEnter={() => setCount(2)}
        onMouseLeave={() => setCount(0)}
        >
          NIE
        </button>}
      </div>
      <p className="read-the-docs">
        Dla pięknej Aleksandry
      </p>
    </>
  )
}

export default App
