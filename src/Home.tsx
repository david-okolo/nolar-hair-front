import React, { useEffect, useRef } from "react";

import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Booking } from "./components/Section/Booking";
import { Main } from "./components/Main/Main";
import { Shop } from "./components/Shop/Shop";
import { useDispatch } from "react-redux";

import { getAllProducts } from "./redux/product.slice";
import { Header } from "./components/Header/Header";
import "./Home.less";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const bookingFormRef = useRef();

  return (
    <>
      <Navbar></Navbar>
      <Header bookingFormRef={bookingFormRef}></Header>
      <Main></Main>
      <Shop></Shop>
      <Booking formRef={bookingFormRef}></Booking>
      <div className="o-faq__wrapper">
        <div className="o-faq__container">
          <h5>frequently asked questions</h5>
          <div className="o-faq__items">
            <div className="m-faq__item">
              <h6>what is trichology?</h6>
              <p>
                Trichology is the scientific study of the hair, scalp disorders
                and diseases. Many people are experiencing thining hair, and
                hair loss and do not know who to turn to for help or solution.
                It was the desire to find solutions to these problems that led
                to the discovery of “Trichology” and still desiring to search
                for more. The truth is despite your age, status or race, hair
                loss is an issue that matters to most women. And when they lose
                their hair, it affects their esteem.
              </p>
            </div>
            <div className="m-faq__item">
              <h6>How do hormones affect hairloss?</h6>
              <p>
                The role of hormones is to regulate cells and tissues activities
                in different organs of the body like the liver, heart and skin.
                Hormones are secreted by endocrine glands through the
                bloodstream. A slight shift or imbalance of your hormones could
                lead to changes in your body as a whole. At the same time, when
                your hormones are in a balanced stage, you can enjoy good
                health, healthy hair and a feeling of well-being. Therefore, one
                of the things that causes hairless can be attributed to hormonal
                imbalance.
              </p>
            </div>
            <div className="m-faq__item">
              <h6>When can I see a Trichologist?</h6>
              <p>
                The following are all signs that warrant a trip to a qualified
                Trichologist.
                <br />
                Excessive hair loss
                <br /> Hair breakage
                <br /> A patch of hair loss <br />
                Excessive facial hair for women <br />
                Loss of eyebrows or eye lashes <br />
                Hair thinning <br />
                Patches of scale <br />
                Excessive scalp itching <br />
                If you are experiencing any of the above hair problems, it’s
                time to seek the expertise of a Trichologist without further
                hesitation. “A stitch on time saves nine.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
