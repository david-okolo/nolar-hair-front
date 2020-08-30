import React, { FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import { links } from "../../utils/constants";
import { Footer } from "../Footer/Footer";
import "./styles.less";
import { Row, Col } from "antd";
import { CustomSection } from "../CustomSection";

import loss from "../../images/services/1.jpg";
import product from "../../images/services/2.jpg";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { ImageGrid } from "../ImageGrid/ImageGrid";

// tile images
import tileOne from "../../images/tiles/tile-1.jpg";
import tileTwo from "../../images/tiles/tile-2.jpg";
import tileThree from "../../images/tiles/tile-3.jpg";
import tileFour from "../../images/tiles/tile-4.jpg";
import { ServiceCard } from "../Main/ServiceCard";
import consultation from "../../images/services/1.jpg";
import barbing from "../../images/services/2.jpg";
import training from "../../images/services/3.jpg";
import products from "../../images/services/4.jpg";
import pedicure from "../../images/services/5.jpg";

export const Services: FC<{}> = (props) => {
  const { xs } = useBreakpoint();

  return (
    <>
      <Navbar alternate active={2} />
      <div className="o-services__header">
        <article>
          <h3>Services</h3>
          <p>
            We offer a wide range of services ranging from hair loss
            consultantions to styling, braiding, supplements and equipments.
            Whatever your hair needs are we’ll be happy to help.
          </p>
        </article>
      </div>
      <div className="o-services__wrapper  -bg-red">
        <div className="o-services__container">
          <ServiceCard
            article={
              <article>
                <h4>Hair Restoration & analysis</h4>
                <p>
                  Consultation plus Hair analysis of male and female pattern
                  baldness, receding hairline and other hair loss are analysed
                  by our competent Trichologist and state of the art intelligent
                  machine. The outcome result leads to the type of
                  recommendation and suggestions on the hair treatment plans or
                  protocols for our clients.
                </p>
              </article>
            }
            image={consultation}
          ></ServiceCard>
          <ServiceCard
            reverse
            article={
              <article>
                <h4>Hair Plus</h4>
                <p>
                  Nolar in addition to Hairloss Consultation & Treatment also
                  offers other hair services with competent and professionals in
                  attendance for: <br />
                  Styling <br />
                  Braiding <br />
                  Barbing <br />
                  Manicure <br />& Pedicure
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
                  Nolar in addition to Hairloss Consultation & Treatment also
                  offers other hair services with competent and professionals in
                  attendance for: Quality hair products & supplements are also
                  available on our store for our clients hair wellness.
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
