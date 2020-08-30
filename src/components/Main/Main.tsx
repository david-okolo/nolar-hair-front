import React, { FC } from "react";
import "./styles.less";
import consultation from "../../images/services/1.jpg";
import barbing from "../../images/services/2.jpg";
import training from "../../images/services/3.jpg";
import products from "../../images/services/4.jpg";
import pedicure from "../../images/services/5.jpg";
import { Process } from "../Process/Process";

export const Main: FC = (props) => {
  return (
    <>
      <div className="o-main__wrapper -normal">
        <div className="o-main__container">
          <Process></Process>
        </div>
      </div>
      <div className="o-main__wrapper">
        <div className="o-main__container">
          <div className="o-main__section  -bg-red">
            <article>
              <h3>Services</h3>
              <p>
                We offer a wide range of services from hair loss consultation to
                general hair wellness. Others include styling, braiding,
                barbing, hair supplements and quality products to achieve your
                hair goals. Whatever your hair needs are, be rest assured that
                we will be happy to help.
              </p>
            </article>
          </div>
          <div className="o-main__section">
            <div className="o-main__services">
              <div className="m-main__servicesContent">
                {[
                  {
                    img: consultation,
                    text: "Hair Restoration & Analysis",
                  },
                  {
                    img: barbing,
                    text: "Nolar Plus",
                  },
                  {
                    img: training,
                    text: "Hair-Ducation & Training",
                  },
                  {
                    img: products,
                    text: "Hair Products",
                  },
                  {
                    img: pedicure,
                    text: "Manicure & Pedicure",
                  },
                ].map(({ img, text }) => {
                  return (
                    <div key={text} className="m-main__servicesSlide">
                      <img src={img} alt="" />
                      <p>{text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
