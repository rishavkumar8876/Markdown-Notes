import React from "react";

function Editor({ title, content, setTitle, setContent }) {
  return (
    <div className="editor">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title..."
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write Markdown here..."
      />
    </div>
  );
}

export default Editor;