import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import ReactToPrint from "react-to-print";
import "./AddToCart.css";

export default function AddToCart() {
    const componentRef = useRef();
    const data = useSelector((state) => state.amount);
    console.log(data);
  
    let sum = 0;
    data?.map((item) => (sum += item?.ItemPrice * item?.ItemQuantity));

  return (
    <div>
      <div className="d-flex flex-column p-2 container Bill my-5" ref={componentRef} >
      <div className="d-flex justify-content-between"   style={{
         
          borderBottom: "1px solid black",
        }}>
        <h6>ITEM NAME</h6>
        <h6>Price</h6>
      </div>
      <div className="d-flex flex-column justify-content-between">
        {data?.map((items) => (
          <div key={items?._id}>
            <div
              className="d-flex justify-content-between my-1"
              key={items?._id}
            >
              <div>{items?.ItemName}</div>
              <div>{items?.ItemPrice * items?.ItemQuantity}</div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="d-flex justify-content-between mt-2"
        style={{
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        <h4>Total</h4>
        <h4>{sum}</h4>
      </div>
      <div className="d-flex justify-content-center mt-2">
      
        <ReactToPrint
          trigger={() =><button type="button" class="btn btn-success  ">Print</button> }
          content={() => componentRef.current}
        />
      </div>
    </div>

    </div>
  )
}
