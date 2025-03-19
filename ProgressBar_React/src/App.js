import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ preogress }) => {
  
  const [animatedProgress,setAnimatedProgress] = useState(0)
  useEffect(()=>{
    setTimeout(()=>{
         setAnimatedProgress(preogress)
    }, 100)
  },[preogress])

  return (
    <div className="outer_container">
      <div
        className="inner_container"
        style={{
          // width: `${preogress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          // transform : "translateX(-75%)",
          color: animatedProgress < 5 ? "black" : "white"
        }}
        role= "progressbar"
        aria-valuenow={preogress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {preogress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [0,1,10, 20, 30, 40, 50,60];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((value) => (
        <ProgressBar key={value} preogress={value} />
      ))}
    </div>
  );
}

//How to add acsseibity into the progress bar
//just add area tags
