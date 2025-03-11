import { useState } from "react";
import  explorer  from "./data/folderData";
import "./styles.css";
import Folder from "./components/Folder"


export default function App() {
  const [explorerData, setexplorerData] = useState(explorer);
  // console.log(explorerrData);
  return(
    <div className="App">
      <Folder explorer = {explorerData}/>
      
    </div>

  )
}
