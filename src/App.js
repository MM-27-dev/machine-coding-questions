import { useState } from "react";
import { explore } from "./data/folderData";
import "./styles.css";
import Folder from "./components/Folder"


export default function App() {
  const [explorerData, setExplorerData] = useState(explore);
  // console.log(explorerData);
  return(
    <div className="App">
      <Folder explorer = {explorerData}/>
      
    </div>

  )
}
