// import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "./cart/CartProduct";

export default function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  let total = 0;

  const handleCheckout = () => {
    // Logic for checkout
    alert("Proceeding to checkout...");
  };

  const handlePayment = () => {
    // Logic for payment
    alert("Redirecting to payment gateway...");
  };

  return (
    <div className="cartContainer container">
      <div className="row">
        <div className="col-md-6">
          {state?.map((cartProduct) => {
            return (
              <CartProduct cartProduct={cartProduct} dispatch={dispatch} />
            );
          })}
          {state.length === 0 && (
            <div className="emptyCart container text-center">
              <h1 className="row heading m-3 text-center">
                {" "}
                Your Cart is Empty...!
              </h1>
              <div className="row text-center">
                <Link to="./products" className="btn btn-large btn-primary">
                  Start Shopping...
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-6 statusContainer">
          <h2>Cart Status</h2>
          {state.map((x) => {
            total += x.sub_total;
          })}
          <div className="total"> ₹ {parseFloat(total).toFixed(2)}</div>

          {/* Checkout and Payment Buttons */}
          {state.length > 0 && (
            <div className="checkout-container mt-3">
              <button
                className="btn btn-success btn-large me-2"
                onClick={handleCheckout}
              >
                Checkout
              </button>
              <button
                className="btn btn-primary btn-large"
                onClick={handlePayment}
              >
                Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
