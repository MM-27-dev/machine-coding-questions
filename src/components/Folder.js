import { useState } from "react";

function Folder({ explorer }) {
  console.log(explorer);
  const [exapand, setExapand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExapand(!exapand)}>
          <span>📁 {explorer.name}</span>
        </div>
        <div style={{ display: exapand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id}/>;
            // <span>{exp.name}</span>;
          })}
          {/* To render infinitelly */}
        </div>
      </div>
    );
  } else {
    return <span className="file"> 🗒️ {explorer.name}</span>;
  }
}

export default Folder;
