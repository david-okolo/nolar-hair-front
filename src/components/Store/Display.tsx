import React, { FC } from "react";
import { Row, Col, Divider, Button } from "antd";
import { MenuCard } from "../MenuCard/MenuCard";
import Text from "antd/lib/typography/Text";
import { StoreCategory, Product, CartProduct } from "./store.interface";
import { useHistory } from "react-router-dom";
import { backendStaticUrl } from "../../utils/constants";

const Display: FC<{
  cart: CartProduct[];
  allProducts: StoreCategory[];
  addToCart: (product: Product) => void;
}> = (props) => {
  const { push } = useHistory();

  return (
    <div style={{ minHeight: "480px" }}>
      {props.allProducts.map((category, index) => {
        return (
          <Row
            key={category.id}
            justify="center"
            style={{
              zIndex: -1,
              minHeight: "480px",
              color: "#20274D",
              padding: "48px 0",
            }}
          >
            <Col span={20}>
              <h2 style={{ color: "#20274D" }}>{category.categoryName}</h2>
              <Divider
                style={{
                  borderColor: "#20274d",
                }}
              ></Divider>
              <div
                style={{
                  margin: "24px 0 0 0",
                  display: "flex",
                  overflow: "auto",
                  padding: "0 60px 20px 0",
                }}
              >
                {category.products.map((item, index) => {
                  return (
                    <MenuCard
                      key={index}
                      image={{
                        data: backendStaticUrl + item.imageUrl,
                        alt: "",
                      }}
                      cardTitle={item.name}
                      extra={[
                        <Text style={{ color: "#20274d", fontWeight: 300 }}>
                          {item.price.toLocaleString("en-NG", {
                            style: "currency",
                            currency: "NGN",
                          })}
                        </Text>,
                        item.count !== 0 ? (
                          props.cart.findIndex(({ id }) => id === item.id) >=
                          0 ? (
                            <Text delete style={{ color: "green" }}>
                              Already in Cart
                            </Text>
                          ) : (
                            <Button
                              type="text"
                              style={{ color: "#20274d" }}
                              onClick={() => {
                                props.addToCart(item);
                                push("/store/cart");
                              }}
                            >
                              Add To Cart
                            </Button>
                          )
                        ) : (
                          <Text delete style={{ color: "red" }}>
                            Sold Out
                          </Text>
                        ),
                      ]}
                    ></MenuCard>
                  );
                })}
              </div>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Display;
