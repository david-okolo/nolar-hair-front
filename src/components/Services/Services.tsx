import React, { FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import "./styles.less";

import { ServiceCard } from "../Main/ServiceCard";
import consultation from "../../images/services/1.jpg";
import barbing from "../../images/services/2.jpg";
import training from "../../images/services/3.jpg";
import products from "../../images/services/4.jpg";
import pedicure from "../../images/services/5.jpg";

export const Services: FC<{}> = (props) => {
  return (
    <>
      <Navbar alternate active={2} />
      <div className="o-services__header">
        <article>
          <h3>Services</h3>
          <p>
            We offer a wide range of services from hair loss consultation to
            general hair wellness. Others include styling, braiding, barbing,
            hair supplements and quality products to achieve your hair goals.
            Whatever your hair needs are, be rest assured that we will be happy
            to help.
          </p>
        </article>
      </div>
      <div className="o-services__wrapper  -bg-red">
        <div className="o-services__container">
          <ServiceCard
            article={
              <article>
                <h4>Hair Loss Analysis & Restoration</h4>
                <p>
                  Loss of hair is one of the most common problems seen by the
                  Trichologist. In order to establish the root cause of the hair
                  loss, our Trichologist will take you through the hair protocol
                  using the state of the art intelligent machine to analyse your
                  hair and scalp and then work out the best regimens that’s
                  suitable for your hair loss.
                </p>
              </article>
            }
            image={consultation}
          ></ServiceCard>
          <ServiceCard
            reverse
            article={
              <article>
                <h4>Nolar Plus</h4>
                <p>
                  IIn addition to trichology service, Nolar offers other hair
                  services in the following with competent and professionals in
                  attendance: <br />
                  Styling <br />
                  Braiding <br />
                  Barbing <br />
                  Nails
                </p>
              </article>
            }
            image={barbing}
          ></ServiceCard>
          <ServiceCard
            article={
              <article>
                <h4>Hair-Ducation & Training</h4>
                <p>
                  Knowledge is power. We offer training and educate the public
                  on how best to look after their hair and when to seek the help
                  of a professional for their hair problems. We also offer
                  training to hair practitioners on the latest happenings in the
                  hair industry and business ethics.
                </p>
              </article>
            }
            image={training}
          ></ServiceCard>
          <ServiceCard
            reverse
            article={
              <article>
                <h4>Hair Products</h4>
                <p>
                  Our tried, tested and trusted products, Design Essentials are
                  one of the best hair care products used at Nolar to preserve
                  the integrity, beauty and style of our clientele’s hair. This
                  is because it’s the most innovative and healthy hair care
                  solutions. At Nolar, we give our clientele only the best.
                </p>
              </article>
            }
            image={products}
          ></ServiceCard>
          <ServiceCard
            article={
              <article>
                <h4>Manuicure & Pedicure</h4>
                <p>
                  Manicure & Pedicure are a must have because they complement
                  the look and feel of our clients. Nolar offers these services
                  too in addition to Hairloss Consultation & Treatment.
                </p>
              </article>
            }
            image={pedicure}
          ></ServiceCard>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
