import React, { FC, useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import rfdc from 'rfdc';
import Display from './Display';
import { Cart } from './Cart';
import { Navbar } from '../Navbar/Navbar';
import { links } from '../../utils/constants';
import { Footer } from '../Footer/Footer';
import { Product, StoreCategory, CartProduct } from './store.interface';
import { getStoreList } from './store.service';

const clone = rfdc();


export const Store: FC = () => {
  const { path } = useRouteMatch();

  const [ cart, setCart ] = useState<CartProduct[]>([])
  const [ state, setState ] = useState<StoreCategory[]>([]);


  // get store listings
  useEffect(() => {
    getStoreList().then((response) => {
      if (response.success) {
        setState(response.data)
      }
    })
  }, [])

  return (
    <>
      <Navbar textColor='#20274D' links={links} linkColor={{
        normal: '#aaa',
        active: '#20274D'
      }} cartCount={cart.length} active={2}/>
      <Switch>
        <Route exact path={path}>
          <Display allProducts={state} addToCart={(product: Product) => {
            setCart([...cart, {...product, count: 1, availableCount: product.count}])
          }}></Display>
        </Route>
        <Route path={`${path}/cart`}>
          <Cart
            clearCart={() => {
              setCart([]);
            }}
            selectedProducts={cart} 
            handleRemove={(id: number) => {
              const clonedCart = clone(cart);
              setCart(clonedCart.filter((item) => {
                if(item.id !== id) {
                  return true
                }

                return false;
              }))
            }}
            changeCount={(value: number, index: number) => {
              const clonedCart = clone(cart);
              clonedCart[index].count = value;
              setCart(clonedCart);
            }}
            />
        </Route>
      </Switch>
      <Footer></Footer>
    </>
  )
}