import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

function Preview({ content, title }) {
  return (
    <div className="preview">
      
      <h2 className="preview-title">{title || "Untitled"}</h2>

      
      <div className="markdown-preview">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {content || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;