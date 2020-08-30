import React, { FC, CSSProperties, ReactElement } from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Row, Col } from "antd";

export const CustomSection: FC<{
  invert?: boolean;
  text: ReactElement;
  image: ReactElement;
}> = (props) => {
  const { lg, xxl } = useBreakpoint();

  const xsColStyle: CSSProperties = {
    minHeight: "480px",
  };

  const lgColStyle: CSSProperties = {
    minHeight: "720px",
  };

  const xxlRowStyle: CSSProperties = {
    margin: "0 0 240px 0",
  };

  const lgRowStyle: CSSProperties = {
    margin: "0 0 120px 0",
  };

  return !props.invert ? (
    <Row
      style={
        xxl
          ? xxlRowStyle
          : lg
          ? lgRowStyle
          : {
              margin: "0",
            }
      }
    >
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 20, offset: 2 }}
        lg={{ span: 10, offset: 2 }}
        style={lg ? lgColStyle : { minHeight: "360px" }}
      >
        <Row
          justify={lg ? "start" : "center"}
          align="middle"
          style={{ height: "100%" }}
        >
          <Col lg={20}>{props.text}</Col>
        </Row>
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        lg={{ span: 12 }}
        style={{
          ...(lg ? lgColStyle : xsColStyle),
        }}
      >
        <Row
          justify={!lg ? "center" : "start"}
          align="middle"
          style={{ height: "100%" }}
        >
          <Col
            span={20}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            {props.image}
          </Col>
        </Row>
      </Col>
    </Row>
  ) : (
    <Row
      style={
        xxl
          ? xxlRowStyle
          : lg
          ? lgRowStyle
          : {
              margin: "0 0 48px 0",
            }
      }
    >
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 18, offset: 3 }}
        lg={{ span: 10, offset: 2 }}
        order={!lg ? 1 : 0}
        style={lg ? lgColStyle : { minHeight: "360px" }}
      >
        <Row
          justify={lg ? "start" : "center"}
          align="middle"
          style={{ height: "100%" }}
        >
          <Col>{props.image}</Col>
        </Row>
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        lg={{ span: 10, offset: 1 }}
        style={{
          ...(lg ? lgColStyle : { minHeight: "360px" }),
        }}
      >
        <Row justify={"center"} align="middle" style={{ height: "100%" }}>
          <Col span={20} style={{}}>
            {props.text}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
