import React, { FC, CSSProperties } from "react";
import "./styles.less";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Row, Col } from "antd";
import { BookingForm } from "../Form/BookingForm";

export const Booking: FC<{
  formRef: any;
}> = ({ formRef }) => {
  const { xs, md, lg, xxl } = useBreakpoint();

  // const xsColStyle: CSSProperties = {
  //   minHeight: '360px'
  // }

  const lgColStyle: CSSProperties = {};

  const xxlRowStyle: CSSProperties = {
    margin: "0 0 60px 0",
  };

  const lgRowStyle: CSSProperties = {
    margin: "0 0 40px 0",
  };

  return (
    <div className="o-booking__wrapper">
      <div className="o-booking__container">
        <Row
          style={
            xxl
              ? xxlRowStyle
              : lg
              ? lgRowStyle
              : {
                  margin: "0 0 40px 0",
                }
          }
        >
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            lg={{ span: 12 }}
            style={lg ? lgColStyle : { minHeight: "300px" }}
          >
            <Row
              justify={lg ? "start" : "center"}
              align="middle"
              style={md ? { height: "100%" } : {}}
            >
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                lg={{ span: 20, offset: 2 }}
              >
                <h2
                  style={{
                    lineHeight: xs ? "48px" : "72px",
                    fontSize: xs ? "36px" : "48px",
                  }}
                >
                  <span style={{ color: "#4C273E" }}>Convinced?</span>
                  <br /> we bet you'd say that
                </h2>
                <p
                  style={{
                    lineHeight: 2,
                    textAlign: !md ? "center" : "left",
                    fontSize: xs ? "14px" : "16px",
                  }}
                >
                  Why not book a consultation with our amazing Nolar hair
                  service
                </p>
              </Col>
            </Row>
          </Col>
          <Col
            ref={formRef}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            lg={{ span: 12 }}
            style={{
              ...lgColStyle,
            }}
          >
            <Row justify={"center"} align="middle" style={{ height: "100%" }}>
              <Col span={24}>
                <BookingForm></BookingForm>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
