import React from "react";
import "./Service.css";

export default function Service() {
  return (
    <div>
      <h2>HOW IT WORKS IN 4 EASY STEP</h2>
      <div class="sectionA">
        <div>
          <img class="our-img" src="" alt="none" />
        </div>
        <div>
          <h4>
            {" "}
            Book Through via website, Android app or call centre at a time of
            your convenience.{" "}
          </h4>
        </div>
      </div>

      <div class="sectionB">
        <div>
          <img class="our-img" src="" alt="none" />
        </div>
        <div>
          <h4> We pick up your clothes </h4>
        </div>
      </div>
      <div class="sectionC">
        <div>
          <img class="our-img" src="" alt="none" />
        </div>
        <div>
          <h4> We wash your clothes </h4>
        </div>
      </div>
      <div class="sectionD">
        <div>
          <img class="our-img" src="" alt="none" />
        </div>
        <div>
          <h4> We deliver clean,folded clothes </h4>
        </div>
      </div>
      <h1> Our Service</h1>
      <p>
        {" "}
        We are dedicated to providing quality laundry service and convenience to
        our customers.We sort carefully wash, dry, fold, and pack your
        laundry.Your clothes may require gentle washing depending on the care
        lables specified.That is why we also provide Hand washing and Dry
        cleaning for your delicates and special item. we also offer ironing and
        steaming services for your freshly washed clothes. Professionally
        pressed by us.
      </p>

      <div class="about-service">
        <div class="section1">
          <div>
            <img class="four-img" src="/image/dry cleaning .jpg" alt="none" />
          </div>
          <div>
            <h1>Dry cleaning</h1>
            <p>
              Schedule a pick up via website, Android app or call centre at a
              time of your convenience.
            </p>
          </div>
        </div>
        <div class="section2">
          <div>
            <img class="four-img" src="/image/streamPress.jpg" alt="none" />
          </div>
          <div>
            <h1>Stream Press</h1>
            <p>
              {" "}
              Hand over the garments to our pick up staff and collect a copy of
              the acknowledgement slip.
            </p>
          </div>
        </div>

        <div class="section3">
          <div>
            <img class="four-img" src="/image/wash&press.jpg" alt="none" />
          </div>
          <div>
            <h1>Wash & Press</h1>
            <p>
              We receive your laundry in our washing hubs and email/SMS you the
              invoice copy.{" "}
            </p>
          </div>
        </div>
        <div class="section4">
          <div>
            <img class="four-img" src="/image/for_folding.jpg" alt="none" />
          </div>
          <div>
            <h1>Wash & Fold</h1>
            <p>
              You receive clean and fresh laundry delivered at your doorstep.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
