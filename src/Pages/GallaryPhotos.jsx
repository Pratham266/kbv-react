import React from "react";
import {
  useMasonry,
  usePositioner,
  useScroller,
  useContainerPosition,
  useResizeObserver,
} from "masonic";
import PhotoCard from "./PhotoCard";

const GallaryPhotos = ({ images }) => {
  const containerRef = React.useRef(null);
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

  const { offset } = useContainerPosition(containerRef, [
    windowWidth,
    windowHeight,
  ]);
  const { scrollTop, isScrolling } = useScroller(offset);

  let contentList = images.map((itm, key) => {
    const newKey = `${new Date().getTime()}-${key}`; // Use a more unique key
    return { ...itm, newKey }; // Return a new object instead of mutating
  });

  const isMobile = window.innerWidth <= 768;

  const columnGutter = isMobile ? 15 : 30;
  const rowGutter = isMobile ? 8 : 16;
  const columnCount = isMobile ? 2 : 4;
  const width = isMobile ? 380 : 1255;

  const positioner = usePositioner(
    {
      columnGutter,
      rowGutter,
      columnCount,
      width,
    },
    []
  );

  const resizeObserver = useResizeObserver(positioner);
  return (
    <>
      {useMasonry({
        itemKey: (data) => data.newKey,
        scrollTop,
        isScrolling,
        height: windowHeight,
        containerRef,
        items: contentList,
        overscanBy: 30,
        resizeObserver,
        positioner,
        render: PhotoCard,
      })}
    </>
  );
};

export default GallaryPhotos;
