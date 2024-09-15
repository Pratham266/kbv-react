import React from "react";

const PhotoCard = ({ data }) => {
  return (
    <div className="p-3 pe-md-0">
      <img
        className="w-100 border-radius-md shadow-lg"
        src={data.url}
        alt={data.title}
      />
    </div>
  );
};

export default PhotoCard;
