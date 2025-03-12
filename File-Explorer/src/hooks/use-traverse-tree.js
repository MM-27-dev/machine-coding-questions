const userTraverseTree = () =>{
    // Recursive function to insert a new node into the folder structure
 function insertNode(tree,folderId, item, isFolder){
    // Check if the current folder matches the target folder ID
    if(tree.id === folderId && tree.isFolder){
        //Adding the item at first
        tree.items.unshift({
            id: new Date().getTime(), // Unique ID for new item
            name: item,               // Name of the new folder/file
            isFolder,                 // Flag to indicate if it's a folder or file
            items: []                 // Empty items array for new folders
        })
        return tree;
    }

    // Traverse child nodes recursively
    const latestNode = tree.items.map((child) =>
        insertNode(child, folderId, item, isFolder)
    );

    return { ...tree, items: latestNode };  // Return updated tree
}

return { insertNode };  // Expose `insertNode` for use in other components
}

export default userTraverseTree;