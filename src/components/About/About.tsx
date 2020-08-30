import React, { FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
// import { Row, Col } from 'antd';
import { CustomSection } from "../CustomSection";

// tile images
import tileOne from "../../images/tiles/tile-1.jpg";
import tileTwo from "../../images/tiles/tile-2.jpg";
import tileThree from "../../images/tiles/tile-3.jpg";
import tileFour from "../../images/tiles/tile-4.jpg";

import recovery from "../../images/recovery.jpg";
import me from "../../images/me.jpg";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

import { ImageGrid } from "../ImageGrid/ImageGrid";

export const About: FC<{}> = (props) => {
  const { xs } = useBreakpoint();

  return (
    <>
      <Navbar alternate active={1} />
      <div
        style={{
          paddingTop: "150px",
        }}
      ></div>
      {/* <Row justify='center'>
      <Col span={20}>
        <h2 style={{color: '#20274D'}}>About</h2>
      </Col>
    </Row> */}
      <CustomSection
        text={
          <>
            <h4
              style={{ textAlign: "left", fontSize: "36px", lineHeight: 1.4 }}
            >
              Restoration &<br /> Recovery at its best
            </h4>
            <p
              style={{
                textAlign: "left",
                lineHeight: 2,
                fontSize: xs ? "14px" : "16px",
                fontWeight: 400,
              }}
            >
              Nolar hair is a luxurious salon designed to meet your hair needs.
              Hair loss is one of the most common hair problems faced by
              individuals, in particular the older adults. We offer hair
              analysis and restoration services to resolve hair loss issues
              effectively. We also offer essential hair care products and
              services to keep you looking gorgeous. At Nolar hair, we offer you
              more than a service, and it is always our pleasure to give you a
              stunning look that will turn heads wherever you go. Welcome!
            </p>
          </>
        }
        image={
          <img
            src={recovery}
            width="100%"
            alt="woman suffering hair loss"
          ></img>
        }
      ></CustomSection>

      <CustomSection
        invert
        text={
          <>
            <h4
              style={{ textAlign: "left", fontSize: "36px", lineHeight: 1.4 }}
            >
              Why Nolar?
            </h4>
            <p
              style={{
                textAlign: "left",
                lineHeight: 2,
                fontSize: xs ? "14px" : "16px",
                fontWeight: 400,
              }}
            >
              We believe your hair deserves the best, and as such we can assure
              that with our curated regimens; Hair loss, baldness, scaling,
              itching, excessive oilness and other hair issues will be things of
              the past. Book a Consultation with a certified & registered
              Trichologist ( hair and scalp specialist) (member Int'l
              Association of Trichologists) and let's restore your confidence
              and bring your hair back to life...
            </p>
          </>
        }
        image={
          <ImageGrid
            images={[tileOne, tileTwo, tileThree, tileFour]}
          ></ImageGrid>
        }
      ></CustomSection>

      <CustomSection
        text={
          <>
            <h4
              style={{ textAlign: "left", fontSize: "36px", lineHeight: 1.4 }}
            >
              Meet our <br /> trichiologist
            </h4>
            <p
              style={{
                textAlign: "left",
                lineHeight: 2,
                fontSize: xs ? "14px" : "16px",
                fontWeight: 400,
              }}
            >
              Tolu Role is a trained and certified Trichologist. She's a member
              of International Association of Trichologists. She had a first
              degree in Architecture from Ogun State Polytechnic Abeokuta
              before. She worked with National Youth Service Corps for about 21
              years before she decided to go for Trichology course. Tolu
              specialises in male and female hair loss. An educator and trainer
              in hair loss management and wellness. Her mission is to help as
              many hair loss sufferers as possible.{" "}
            </p>
          </>
        }
        image={
          <img src={me} width="100%" alt="woman getting her hair done"></img>
        }
      ></CustomSection>

      <Footer></Footer>
    </>
  );
};
