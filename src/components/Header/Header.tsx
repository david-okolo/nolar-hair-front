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
            that with our curated regiments, hair loss, baldness, scaling,
            itching, breakage etc, will be things of the past.
            <br /> Book a consultation with our certified and registered
            Trichologist and let’s get you back to the most balanced hair and
            scalp conditions that give you healthy, vibrant shine and easy to
            maintain hair.
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
