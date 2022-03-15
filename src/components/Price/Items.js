import React from "react";
import "./Price.css";

function Items({itemName, itemPrice}) {
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
    </div>
  );
}

export default Items;
