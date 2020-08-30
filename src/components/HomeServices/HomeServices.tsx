import React, { FC } from "react";
import "./styles.less";
import { ImageGrid } from "../ImageGrid/ImageGrid";

// tile images
import tileOne from "../../images/tiles/tile-1.jpg";
import tileTwo from "../../images/tiles/tile-2.jpg";
import tileThree from "../../images/tiles/tile-3.jpg";
import tileFour from "../../images/tiles/tile-4.jpg";

export const HomeServices: FC = (props) => {
  return (
    <div className={`o-process__wrapper -reverse`}>
      <div className="o-process__container">
        <article>
          <h3 style={{ fontFamily: "Cormorant" }}>Our Process</h3>
          <p>
            Every hair recovery journey with Nolar goes through a pre-defined
            process.
            <br />
            <br />
            Consulation <br />
            Diagnosis/Analysis <br />
            Treatment/Management <br />
            General hair wellness
          </p>
        </article>
      </div>
      <div className="o-process__container">
        <ImageGrid images={[tileOne, tileTwo, tileThree, tileFour]}></ImageGrid>
      </div>
    </div>
  );
};
