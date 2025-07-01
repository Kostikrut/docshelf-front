function FileDetailsPanel({ file, onClose }) {
  return (
    <div className="w-[300px] bg-white shadow-lg p-4 absolute right-0 top-0 bottom-0 z-50 overflow-y-auto border-l border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[var(--color-text-main)]">
          File Details
        </h3>
        <button
          onClick={onClose}
          className="text-sm text-red-500 hover:underline"
        >
          Close
        </button>
      </div>

      <div className="text-sm text-[var(--color-text-main)] space-y-2">
        <p>
          <strong>Filename:</strong> {file.filename}
        </p>
        <p>
          <strong>Type:</strong> {file.type}
        </p>
        <p>
          <strong>Size:</strong> {(file.size / 1024).toFixed(1)} KB
        </p>
        <p>
          <strong>Permission:</strong> {file.permission}
        </p>
        <p>
          <strong>User:</strong> {file.user}
        </p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(file.createdAt).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong>{" "}
          {new Date(file.updatedAt).toLocaleString()}
        </p>
        <p>
          <strong>Tags:</strong> {file.tags?.join(", ") || "None"}
        </p>
        <p>
          <strong>Reminders:</strong> {file.remiders?.length || 0}
        </p>
        <p>
          <strong>Is Trashed:</strong> {file.isTrashed ? "Yes" : "No"}
        </p>
        <p>
          <strong>Is Deleted:</strong> {file.isDeleted ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}

export default FileDetailsPanel;
