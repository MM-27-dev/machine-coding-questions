import { useState } from "react";

function Folder({ explorer }) {
  console.log(explorer);
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={()=>setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((exp) => {
            return <span>{exp.name}</span>;
          })}
        </div>
      </div>
    );
  } else {
    <div>
      <span>🗒️ {explorer.name}</span>
    </div>;
  }
}

export default Folder;
