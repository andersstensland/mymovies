import React from "react";

export const Movie = ({ title, posterUrl }) => {
  // Disable pointer events and text selection on the image
  const imageStyles = {
    pointerEvents: "none", // Disable pointer events on the image
    userSelect: "none", // Disable text selection and highlighting
  };

  return (
    <div className="max-w-xs rounded overflow-hidden">
      <img
        className="object-cover w-full"
        src={posterUrl}
        alt={title}
        style={imageStyles}
      />
      <div className="px-6 py-2">
        <div className="flex flex-col font-bold text-white text-xs text-center mb-2">
          {title}
        </div>
      </div>
    </div>
  );
};
