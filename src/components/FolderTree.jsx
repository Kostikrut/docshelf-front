import { useState } from "react";

function FolderTree({ nodes = [], onFileClick }) {
  return (
    <ul className="pl-4 border-l border-gray-300">
      {nodes.map((node) => (
        <FolderNode key={node._id} node={node} onFileClick={onFileClick} />
      ))}
    </ul>
  );
}

function FolderNode({ node, onFileClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (node.children && node.children.length > 0) {
      setIsOpen((prev) => !prev);
    } else {
      onFileClick?.(node);
    }
  };

  return (
    <li className="mb-1">
      <div
        className="flex items-center gap-2 text-[var(--color-text-main)] font-medium cursor-pointer hover:opacity-80 p-2"
        onClick={toggle}
      >
        {node.type === "folder" && (
          <img
            className="w-10 h-10 transition-none"
            src={
              node.children && node.children.length > 0
                ? isOpen
                  ? "/icons/folder-open.svg"
                  : "/icons/folder.svg"
                : "/icons/folder.svg"
            }
            alt="folder"
          />
        )}

        {node.type !== "folder" && (
          <div className="relative w-10 h-10">
            <img
              src={"/icons/file.svg"}
              alt="file"
              className="w-full h-full transition-none"
            />
            <span className="absolute top-6 left-3 border-1 bg-white text-[var(--color-accent)] text-[10px] font-semibold px-1 rounded-br">
              {node.type.includes("/") ? node.type.split("/")[1] : node.type}
            </span>
          </div>
        )}

        <span>{node.name || node.filename}</span>
      </div>

      {isOpen && node.children && node.children.length > 0 && (
        <FolderTree nodes={node.children} onFileClick={onFileClick} />
      )}
    </li>
  );
}

export default FolderTree;
