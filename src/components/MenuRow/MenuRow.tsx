import React, { FC } from "react";
import { Product } from "../Store/store.interface";
import Text from "antd/lib/typography/Text";
import { Counter } from "./Counter";
import { AiOutlineClose } from "react-icons/ai";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { backendStaticUrl } from "../../utils/constants";

export const MenuRow: FC<{
  product: Product;
  availableCount: number;
  onDelete: (index: number) => void;
  setValue: (value: number) => void;
}> = ({ product, onDelete, availableCount, setValue }) => {
  const { xl } = useBreakpoint();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        minHeight: "60px",
        fontSize: xl ? "16px" : "12px",
      }}
    >
      {xl && (
        <img src={backendStaticUrl + product.imageUrl} alt="" height="144px" />
      )}
      <div
        style={{
          flex: 2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: "24px",
        }}
      >
        <Text>{product.name}</Text>
      </div>
      <Counter
        min={1}
        max={availableCount}
        value={product.count}
        onChange={(value: number) => {
          setValue(value);
        }}
      ></Counter>
      <Text>
        {product.price.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
        })}
      </Text>
      <AiOutlineClose
        style={{
          margin: "0 24px",
        }}
        onClick={() => {
          onDelete(product.id);
        }}
      ></AiOutlineClose>
    </div>
  );
};
