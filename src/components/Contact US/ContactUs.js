import React from "react";
import "./contactUs.css";

export default function ContactUs() {
  return (
    <div className="container my-4 d-flex ">
         <div className=" d-flex flex-column mx-2">
        <div className=" d-flex align-items-center flex-column">
        <h1>Get In Touch</h1>
        <h6>Hey don't worry gotta a problem or question related to us, we’d love to hear from you , please send  a message to contact us and  we’ll respond as soon as possible....</h6>
         </div>
         <div className="d-flex align-items-center flex-column">
             <img src="image/contact.jpg" style={{width:"50%"}} alt="none" />

         </div>
         </div>
        <div className="form py-4 ">

      <form className="row g-3 mx-2">
        <div className="col-md-6 ">
        <label for="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            aria-label="Name"
            id="Name"
            />
        </div>
        <div className="col-md-6 ">
        <label for="number" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            class="form-control"
            placeholder="enter your mobile no."
            aria-label="Last name"
            id="number"
            />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            ></textarea>
          <label htmlFor="floatingTextarea2">Ask a question ?</label>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
            </div>
    </div>
  );
}
