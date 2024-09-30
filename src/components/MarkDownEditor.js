import React from 'react';

const MarkDownEditor = ({ markdown, setMarkdown }) => {
  return (
    <textarea
      className="textarea"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      placeholder="Write your markdown here..."
    />
  );
};

export default MarkDownEditor;