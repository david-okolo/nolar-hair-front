import React, { FC, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Display from "./Display";
import { Cart } from "./Cart";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Product } from "./store.interface";
import { useSelector, useDispatch } from "react-redux";
import { ProductSelectors, getAllProducts } from "../../redux/product.slice";
import { CartSelectors, CartActions } from "../../redux/cart.slice";

const { selectAllProducts } = ProductSelectors;
const { selectCart } = CartSelectors;
const {
  addedToCart,
  clearedCart,
  changeItemCount,
  removedFromCart,
} = CartActions;

export const Store: FC = () => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

  const allProducts = useSelector(selectAllProducts);
  const cart = useSelector(selectCart);
  // const [cart, setCart] = useState<CartProduct[]>([]);
  // const [state, setState] = useState<StoreCategory[]>([]);

  useEffect(() => {
    if (allProducts.length < 1) {
      dispatch(getAllProducts());
    }
  }, [dispatch, allProducts.length]);

  return (
    <>
      <Navbar alternate cartCount={cart.length} active={3} />
      <div
        style={{
          paddingTop: "150px",
        }}
      ></div>
      <Switch>
        <Route exact path={path}>
          <Display
            cart={cart}
            allProducts={allProducts}
            addToCart={(product: Product) => {
              dispatch(addedToCart(product));
            }}
          ></Display>
        </Route>
        <Route path={`${path}/cart`}>
          <Cart
            clearCart={() => {
              dispatch(clearedCart());
            }}
            selectedProducts={cart}
            handleRemove={(id: number) => {
              dispatch(removedFromCart({ id }));
            }}
            changeCount={(value: number, index: number) => {
              dispatch(changeItemCount({ id: index, value }));
            }}
          />
        </Route>
      </Switch>
      <Footer></Footer>
    </>
  );
};
