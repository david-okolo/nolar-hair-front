import React, { FC } from "react";
import "./ImageGrid.less";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

export const ImageGrid: FC<{
  images: Array<string>;
}> = ({ images }) => {
  const { xs } = useBreakpoint();

  let size = "md";

  if (xs) {
    size = "xs";
  }

  return (
    <div className={`image-container-${size}`}>
      {images.map((item, index) => {
        if (index >= 1 && index <= 2) {
          return (
            <img
              key={index}
              src={item}
              alt="close up of a woman's hair"
              className={`image-tile-${size} tile-lg-${size}`}
            />
          );
        }

        return (
          <img
            key={index}
            src={item}
            alt="close up of a woman's hair"
            className={`image-tile-${size} tile-md-${size}`}
          />
        );
      })}
    </div>
  );
};
