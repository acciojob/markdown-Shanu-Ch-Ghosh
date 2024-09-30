import React from 'react';

const MarkDownPreview = ({ html }) => {
  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default MarkDownPreview;