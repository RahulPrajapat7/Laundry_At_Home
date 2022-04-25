import React from "react";
import "./Service.css";

export default function Service() {
  return (
    <>
      <div>
        <div className="section d-flex align-items-center flex-column">
          <h1> Our Service</h1>
          <p className="mx-5 px-4 mb-5">
            {" "}
            We are dedicated to providing quality laundry service and
            convenience to our customers.We sort carefully wash, dry, fold, and
            pack your laundry.Your clothes may require gentle washing depending
            on the care lables specified.That is why we also provide Hand
            washing and Dry cleaning for your delicates and special item. we
            also offer ironing and steaming services for your freshly washed
            clothes. Professionally pressed by us.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <img
                  className="four-img"
                  src="/image/dry_cleaning .jpg"
                  alt="none"
                />
              </div>
              <div>
                <h1>Dry cleaning</h1>
                <p>
                  {" "}
                  Schedule a pick up via website, Android app or call centre at
                  a time of your convenience.
                </p>
              </div>
            </div>
            <div className="col">
              <div>
                <img
                  className="four-img"
                  src="/image/streamPress.jpg"
                  alt="none"
                />
              </div>
              <div>
                <h1>Stream Press</h1>
                <p>
                  {" "}
                  Hand over the garments to our pick up staff and collect a copy
                  of the acknowledgement slip.
                </p>
              </div>
            </div>

            <div className="col  ">
              <div>
                <img
                  className="four-img"
                  src="/image/wash&press.jpg"
                  alt="none"
                />
              </div>
              <div>
                <h1>Wash & Press</h1>
                <p>
                  We receive your laundry in our washing hubs and email/SMS you
                  the invoice copy.{" "}
                </p>
              </div>
            </div>
            <div className="col">
              <div>
                <img
                  className="four-img"
                  src="/image/for_folding.jpg"
                  alt="none"
                />
              </div>
              <div>
                <h1>Wash & Fold</h1>
                <p>
                  You receive clean and fresh laundry delivered at your
                  doorstep.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div className="mb-2"></div>
    </>
  );
}
