import React, { FC } from "react";
import "./styles.less";

import bg from "../../images/bg-1.jpg";

export const Header: FC<{
  bookingFormRef: any;
}> = ({ bookingFormRef }) => {
  return (
    <header
      className="o-header__wrapper"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        minHeight: "600px",
      }}
    >
      <div className="o-header__container">
        <div className="m-header__cta">
          <h1>Hair Recovery Made Simple</h1>
          <p>
            We believe your hair deserves the best, and as such we can assure
            that with our curated regimens, Hair loss, baldness, scaling,
            itching, excessive oilness you name it, will be things of the past.
            Book a consultation with our licensed haircare practicioner
            (Association of Trichiology) and lets get you back to the beautiful
            hair you’re younger self would be proud of.
          </p>
          <div
            className="a-header__button"
            onClick={() => {
              console.log(bookingFormRef.current.offsetTop);
              window.scrollTo(0, bookingFormRef.current.offsetTop);
            }}
          >
            <p>Book an Appointment</p>
          </div>
        </div>
      </div>
    </header>
  );
};
