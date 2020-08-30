import React, { FC, useState, Dispatch, SetStateAction } from "react";
import { Row, Col, Drawer, Badge } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import "./Navbar.less";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { INavbarLink } from "./navbar.interface";
import { IconSwitcher } from "../IconSwitcher/IconSwitcher";
import { Link, useHistory } from "react-router-dom";

const MenuItems: FC<{
  setOpen: Dispatch<SetStateAction<boolean>>;
  alternate: boolean;
}> = ({ alternate, setOpen }) => {
  const history = useHistory();

  return (
    <ul className={`m-menuItems__content ${alternate ? "-alternate" : ""}`}>
      <li
        onClick={() => {
          history.push("/about");
        }}
      >
        about
      </li>
      <li
        onClick={() => {
          history.push("/services");
        }}
      >
        services
      </li>
      <li
        onClick={() => {
          setOpen(false);
          history.push("/store");
        }}
      >
        store
      </li>
      <li
        onClick={() => {
          setOpen(false);
          history.push("/store/cart");
        }}
      >
        cart
      </li>
    </ul>
  );
};

// const FullMenu: FC = () => {};

export const Navbar: FC<{
  alternate?: boolean;
  active?: number;
  cartCount?: number;
}> = ({ alternate }) => {
  const history = useHistory();
  const { lg } = useBreakpoint();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="o-navigation__wrapper">
        <div
          className={`m-navigation__content ${
            alternate && !menuOpen ? "-alternate" : ""
          }`}
        >
          <h2
            onClick={() => {
              history.push("/");
            }}
          >
            nolar
          </h2>
          {lg ? (
            <div className="o-menuItemsInline__wrapper">
              <MenuItems
                setOpen={setMenuOpen}
                alternate={!!(alternate && !menuOpen)}
              />
            </div>
          ) : (
            <IconSwitcher
              toggler={menuOpen}
              icons={[
                <MenuOutlined
                  style={{
                    color: alternate ? "#20274D" : "#fff",
                  }}
                  onClick={() => {
                    setMenuOpen(true);
                  }}
                />,
                <CloseOutlined
                  color="#fff"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                />,
              ]}
            ></IconSwitcher>
          )}
        </div>
      </div>
      <div className={`o-navigation__fullscreen ${!menuOpen ? "-d-none" : ""}`}>
        <MenuItems
          setOpen={setMenuOpen}
          alternate={!!(alternate && !menuOpen)}
        />
      </div>
    </>
  );
};
