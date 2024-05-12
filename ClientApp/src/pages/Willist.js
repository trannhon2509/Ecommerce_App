import React from "react";
import "../assets/css/WillList.css";
import { Link } from 'react-router-dom';
import { RoutePaths } from "../config/config";
import ItemShoppingCard from "../components/ItemShoppingCard";
function Willist() {
  return (
    <div className="container padding-bottom-3x mb-1">
      <div className="table-responsive shopping-cart table-hover table">
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Subtotal</th>
              <th className="text-center">Discount</th>
              <th className="text-center">
                <a className="btn btn-sm btn-outline-danger" href="#">
                  Clear Cart
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <ItemShoppingCard />
            <ItemShoppingCard />
            <ItemShoppingCard />
            <ItemShoppingCard />
          </tbody>
        </table>
      </div>
      <div className="shopping-cart-footer">
        <div className="column text-lg">
          Subtotal: <span className="text-medium">$289.68</span>
        </div>
      </div>
      <div className="shopping-cart-footer">
        <div className="column">
          <Link className="btn btn-outline-secondary shadow" to={RoutePaths.shop}>
            <i className="icon-arrow-left" />
            &nbsp;Back to Shopping
          </Link>
        </div>
        <div className="column">
          <Link className="btn btn-success shadow" to={RoutePaths.checkout}>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Willist;
