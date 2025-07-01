import { useState } from "react";
import fileTree from "../helpers/fileTreeSkeleton"; // dev-only
import FolderTree from "../components/FolderTree";
import FileDetailsPanel from "../components/FileDetailsPanel";

function FileSystemPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="flex p-15 relative">
      {selectedFile && (
        <FileDetailsPanel
          file={selectedFile}
          onClose={() => setSelectedFile(null)}
        />
      )}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-main)]">
          File System
        </h2>
        <FolderTree nodes={fileTree} onFileClick={setSelectedFile} />
      </div>
    </div>
  );
}

export default FileSystemPage;
