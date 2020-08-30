import React, { FC } from "react";
import { Row, Col, Card } from "antd";
import "./styles.less";
import { Product } from "../Store/store.interface";
import { useSelector, useDispatch } from "react-redux";
import { ProductSelectors } from "../../redux/product.slice";
import { backendStaticUrl } from "../../utils/constants";
import { CartSelectors, CartActions } from "../../redux/cart.slice";
import { useHistory } from "react-router-dom";

const { selectAllProducts } = ProductSelectors;
const { selectCart } = CartSelectors;
const { addedToCart } = CartActions;

export const Shop: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const products = useSelector(selectAllProducts);
  const cart = useSelector(selectCart);

  const items = products.reduce((acc: Product[], { products }) => {
    return [...acc, ...products];
  }, []);

  return (
    <div className="o-shop__wrapper">
      <div className="o-shop__container">
        <h3>
          Our tried and
          <br /> trusted Products
        </h3>
        <div className="divider"></div>
        <div className="o-shop__productsWrapper">
          <div className="o-shop__products">
            {items.map((item) => {
              const isAdded = cart.findIndex(({ id }) => id === item.id) >= 0;

              return (
                <div className="o-shop__item">
                  <img src={"http://nolarhair.com.ng" + item.imageUrl} alt="" />
                  <div className="a-shop__itemName">
                    <p>{item.name}</p>
                  </div>
                  <div className="m-shop__actions">
                    <p>
                      {item.price.toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      })}
                    </p>
                    <p
                      className={`-button ${isAdded && "-added"}`}
                      onClick={() => {
                        if (!isAdded) {
                          dispatch(addedToCart(item));
                          history.push("/store/cart");
                        }
                      }}
                    >
                      {isAdded ? "Already in Cart" : "Add To Cart"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
