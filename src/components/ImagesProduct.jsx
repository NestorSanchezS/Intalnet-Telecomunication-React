import React from "react";
import img01 from "../assets/images/shop/03.jpg";

export const ImagesProduct = ({ image }) => {
  let imgPath = img01;
  if (image.length > 1) {
    imgPath = `http://localhost:3300${image.path}`;
  }
  console.log(imgPath);
  return (
    <div data-thumb={imgPath}>
      <a href={imgPath}>
        <img
          src={imgPath}
          alt="Imagen de dispositivo"
          data-caption=""
          data-src={imgPath}
          data-large_image={imgPath}
          data-large_image_width="1000"
          data-large_image_height="1000"
        />
      </a>
    </div>
  );
};
