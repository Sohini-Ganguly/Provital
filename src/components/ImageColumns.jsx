import React from "react";
import "../styles/ImageColumns.scss";

const imagesColumn1 = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
];
const imagesColumn2 = [
  "/images/img5.png",
  "/images/img6.png",
  "/images/img7.png",
  "/images/img8.png",
];

const buildLoop = (images) => {
  const set = [...images, "SPACER"];
  return [...set, ...set];
};

const ImageColumns = () => {
  return (
    <div className="image-column-container">
      <div className="image-columns">
        <div className="column column1">
          {buildLoop(imagesColumn1).map((src, i) =>
            src === "SPACER" ? (
              <div className="spacer" key={`spacer1-${i}`} />
            ) : (
              <img src={src} alt={`col1-${i}`} key={`col1-${i}`} />
            )
          )}
        </div>
        <div className="column column2">
          {buildLoop(imagesColumn2).map((src, i) =>
            src === "SPACER" ? (
              <div className="spacer" key={`spacer2-${i}`} />
            ) : (
              <img src={src} alt={`col2-${i}`} key={`col2-${i}`} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageColumns;
