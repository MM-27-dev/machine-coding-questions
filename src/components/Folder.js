import { useState } from "react";

function Folder({ handleInsertNode, explorer }) {
    const [expand, setExpand] = useState(false);  // Tracks folder expansion
    const [showInput, setshowInput] = useState({
        visible: false,
        isFolder: false
    });

    // Handles the 'Add Folder' or 'Add File' button click
    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation(); // Prevents the click event from bubbling up
        setExpand(true);     // Expands the folder to show new input field
        setshowInput({
            visible: true,
            isFolder
        });
    };

    // Handles adding a new folder or file when 'Enter' is pressed
    const onAddFolder = (e) => {
        if (e.key === "Enter" && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
            setshowInput({ ...showInput, visible: false });  // Hides the input after adding
        }
    };

    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>📁 {explorer.name}</span>
                    <div>
                        <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
                        <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
                    </div>
                </div>

                {/* Folder Expansion Logic */}
                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {showInput.visible && (
                        <div className="inputContainer">
                            <span>{showInput.isFolder ? "📁" : "🗒️"}</span>
                            <input
                                type="text"
                                onBlur={() => setshowInput({ ...showInput, visible: false })}
                                className="inputContainer__input"
                                autoFocus
                                onKeyDown={onAddFolder}
                            />
                        </div>
                    )}

                    {/* Recursive Rendering for Child Nodes */}
                    {explorer.items.map((exp) => (
                        <Folder
                            handleInsertNode={handleInsertNode}
                            explorer={exp}
                            key={exp.id}
                        />
                    ))}
                </div>
            </div>
        );
    } else {
        return <span className="file">🗒️ {explorer.name}</span>;
    }
}

export default Folder;
