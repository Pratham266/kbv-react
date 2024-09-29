import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const PhotoCard = ({ data }) => {
  return (
    <div className="p-3 pe-md-0" key={data.url}>
      <PhotoProvider>
        <PhotoView src={data.url}>
          <img
            className="w-100 border-radius-md shadow-lg"
            src={data.url}
            alt={data.title}
          />
        </PhotoView>
        {/* <div>{data.title}</div> */}
      </PhotoProvider>
    </div>
  );
};

export default PhotoCard;
