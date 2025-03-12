import { useState } from "react";
import explorer from "./data/folderData";
import "./styles.css";
import Folder from "./components/Folder";
import userTraverseTree from "./hooks/use-traverse-tree";

export default function App() {
    const [explorerData, setExplorerData] = useState(explorer);
    const { insertNode } = userTraverseTree();

    // Handles the insertion logic and updates the explorer data
    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(finalTree); // Update state with new folder structure
    };

    return (
        <div className="App">
            <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
        </div>
    );
}
