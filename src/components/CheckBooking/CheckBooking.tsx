import React, { FC, useState } from "react";
import { Row, Col, Divider } from "antd";
import { SingleInputBar } from "../Form/SingleInputBar";
import { backendUrl, DEFAULT_HEADERS, links } from "../../utils/constants";
import { Navbar } from "../Navbar/Navbar";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Text from "antd/lib/typography/Text";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export const CheckBooking: FC<any> = (props) => {
  const [state, setState] = useState<{
    email: string;
    paidRequest: boolean;
    paymentStatus: boolean;
    timeslot: Date;
    service: string;
    status: string;
  }>();

  const { xs } = useBreakpoint();

  const checkBookingByReference = async (value: string) => {
    const response = await fetch(backendUrl + "/booking/check", {
      method: "POST",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({ reference: value }),
    });

    const { data } = await response.json();
    setState({ ...data, timeslot: new Date(Number(data.timeSlot)) });
  };

  return (
    <>
      <Navbar alternate active={4} />
      <Row
        justify="center"
        style={{
          minHeight: "480px",
          color: "#20274D",
          padding: "48px 0",
        }}
      >
        <Col span={20}>
          <h2 style={{ color: "#20274D" }}>Check Booking</h2>
          <Divider
            style={{
              borderColor: "#20274d",
            }}
          ></Divider>
          <div
            style={{
              margin: "24px 0 0 0",
              display: "flex",
              flexDirection: "column",
              overflow: "auto",
            }}
          >
            <SingleInputBar
              buttonText="Check Booking"
              placeholder="Your reference number"
              onSubmit={(value) => {
                checkBookingByReference(value);
              }}
            ></SingleInputBar>
          </div>
        </Col>
        <Col span={20}>
          <Row justify={"start"}>
            <div
              style={{
                margin: "48px 0",
                display: "flex",
                width: "100%",
                justifyContent: xs ? "center" : "flex-start",
              }}
            >
              <h4 style={{ fontWeight: 900, color: "#20274d" }}>
                Reservation Details
              </h4>
            </div>

            {state && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  justifyContent: "space-between",
                  borderRadius: "10px",
                  boxShadow: "2px 2px 10px #ddd",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <Text
                      strong
                      style={{
                        color: "#20274D",
                      }}
                    >
                      Email:{" "}
                    </Text>
                    <Text>{state.email}</Text>
                  </div>
                  <div>
                    <Text
                      strong
                      style={{
                        color: "#20274D",
                      }}
                    >
                      Service:{" "}
                    </Text>
                    <Text style={{ textTransform: "capitalize" }}>
                      {state.service}
                    </Text>
                  </div>
                  <div>
                    <Text
                      strong
                      style={{
                        color: "#20274D",
                      }}
                    >
                      Payment:{" "}
                    </Text>
                    {state.paymentStatus ? (
                      <AiOutlineCheck color="green"></AiOutlineCheck>
                    ) : (
                      <AiOutlineClose color="red"></AiOutlineClose>
                    )}
                  </div>
                  <div>
                    <Text
                      strong
                      style={{
                        color: "#20274D",
                      }}
                    >
                      Date:{" "}
                    </Text>
                    <Text>{state.timeslot.toDateString()}</Text>
                  </div>
                  <div>
                    <Text
                      strong
                      style={{
                        color: "#20274D",
                      }}
                    >
                      Status:{" "}
                    </Text>
                    <Text>{state.status}</Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: !xs ? "center" : "flex-start",
                    padding: "24px 0",
                  }}
                >
                  <Text>Time</Text>
                  <Text
                    style={{
                      fontSize: "48px",
                    }}
                  >
                    {state.timeslot.toLocaleTimeString()}
                  </Text>
                </div>
              </div>
            )}
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
