import React, { useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  removeToCart,
  updateCart,
} from "../../State/action-creater/index";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.amount);
  console.log(data);

  let sum = 0;
  data?.map((item) => (sum += item?.ItemPrice * item?.ItemQuantity));

  useEffect(() => {
    dispatch(fetchData());
    //
  }, [dispatch]);
  return (
    <div className="d-flex flex-column cart p-2">
      <div
        className="d-flex justify-content-between"
        style={{
          borderBottom: "1px solid black",
        }}
      >
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
            
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div
              class="btn-group me-1 "
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                onClick={() => {
                  dispatch(
                    updateCart({
                      ItemQuantity: items?.ItemQuantity + 1,
                      id: items?._id,
                    })
                  );
                }}
                type="button"
                class="btn btn-info"
              >
                +
              </button>

              <button type="button" class="btn btn-primary">
                {" "}
                {items?.ItemQuantity}
              </button>

              <button
                onClick={() => {
                  if (items?.ItemQuantity - 1 === 0) {
                    dispatch(removeToCart(items?._id));
                  } else {
                    dispatch(
                      updateCart({
                        ItemQuantity: items?.ItemQuantity - 1,
                        id: items?._id,
                      })
                    );
                  }
                }}
                type="button"
                class="btn btn-info"
              >
                -
              </button>
            </div>
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
        <Link to="/cart" type="button" class="btn btn-success  ">
          Procced To Pay
        </Link>
      </div>
    </div>
  );
}

export default Cart;
