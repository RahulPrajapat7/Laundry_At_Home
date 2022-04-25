import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../State/index";
import "./Price.css";
// import { addToCart, removeToCart } from "../../State/action-creater";
function Items({ itemName, itemPrice, ProductName }) {
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(actionCreators, dispatch);
  
  return (
    <div className="d-flex flex-column item p-2">
      <div className="d-flex justify-content-between">
        <h6>ITEM NAME</h6>
        <h6>Price</h6>
      </div>
      <div className="d-flex justify-content-between">
        <p>{itemName}</p>
        <p>Rs. {itemPrice}/piece</p>
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-success"
          onClick={() => {
            addToCart({ ItemName: itemName, ItemPrice: itemPrice });
          }}
        >
          Add To Cart <img src="/assets/cart-plus-solid.svg" alt="add to cart"/>
        </button>
      </div>
    </div>
  );
}

export default Items;
