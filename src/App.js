import './App.css';
import { useState } from 'react'

function App() {

  const [state, setState] = useState(false)

  let p;
  let span1;
  let span2;
  let img;

  if(state) {
    p = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
    span1 = 'John Tarkpor'
    span2 = 'Junior Front-end Developer'
    img = require('./images/image-john.jpg')
  } else{
    p = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
  span1 = 'Tanya Sinclair'
  span2 = 'UX Engineer'
  img = require('./images/download.jfif')
    
  }
  

  return (
    <div className="App">
      <div className="content">
        <p>
          {p}
        </p>
        <img className="quotes" src=
        {require('./images/pattern-quotes.svg').default}
         alt="quotes" />
         <div>
          <span>{span1}</span>
          <span>{span2}</span>
         </div>
        
      </div>

      <div>
        <img className="img" src={img} alt="image" />
        <div>
          <img src={require('./images/icon-prev.svg').default} alt="" onClick={()=>setState(!state)}/>
          <img src={require('./images/icon-next.svg').default} alt="" onClick={()=>setState(!state)}/>
        </div>
      </div>
      <img className="curve" src={require('./images/pattern-curve.svg').default} alt="" />
    </div>
  );
}

export default App;