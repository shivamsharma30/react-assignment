import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.scss";

const Header = () => {
  const { cartProducts } = useSelector(state => state.cartInfo);

  return (
    <div className="header-wrapper">
      <Link to="/" className= "nav-link">Home</Link>
      <Link to="/cart" className="nav-link">
        <Badge badgeContent={cartProducts.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </div>
  );
};

export default Header;
export const sum = (a,b)=> a+b;