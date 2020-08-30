import React, { FC } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Text from "antd/lib/typography/Text";

export const Counter: FC<{
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#20274D",
        marginRight: "24px",
        minWidth: "72px",
      }}
    >
      <AiOutlineMinus
        style={{
          ...(props.value === props.min && { color: "gray" }),
          cursor: "pointer",
        }}
        onClick={() => {
          if (props.value > props.min) {
            props.onChange(props.value - 1);
          }
        }}
      ></AiOutlineMinus>
      <Text>{props.value}</Text>
      <AiOutlinePlus
        style={{
          ...(props.value === props.max && { color: "gray" }),
          cursor: "pointer",
        }}
        onClick={() => {
          if (props.value < props.max) {
            props.onChange(props.value + 1);
          }
        }}
      ></AiOutlinePlus>
    </div>
  );
};
