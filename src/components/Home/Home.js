import React from 'react'
import "./Home.css";
import Service from '../Sevices/Service'


export default function Home(props) {
  const {showAlert}=props;
  console.log(showAlert);
  return (
    <>
    <div className="d-flex flex-column align-items-center container mt-5 ">
      <h3>OUR PASSION AND COMMITMENT</h3>
      <i className='line my-5'/>
      <h6 className='mb-5'>We are professionals and are committed to providing quality laundry and dry cleaning service for both our individual and corporate clients. We are always on the lookout for the latest technologies, more effective cleaning methods in dealing with stains and delicates. We are passionate about making our laundry service simple and convenient for our customers.</h6>

    </div>
    <div className="container1">

        <div className="section1">
       
        <h5>If you are tired of doing Ironing or washing your clothes, then what are you waiting for? We have brought the best Laundary services in which you will be able to save both your effort and time.</h5>
        <h6> We promise to provide you the best of the best Laundary services keeping in mind all your needs.</h6>  
         </div>
         <div className="section2">
             <img  className='img-fluid' src="/image/bg-1.webp" alt="none" />
        </div>   
     </div>
    
    <Service/>
    <div className=" d-flex align-items-center flex-column my-4">
          <h2>HOW IT WORKS IN 4 EASY STEP</h2>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="sectionA col ">
              <div
                className="badge bg-primary text-wrap"
                style={{ width: "16rem" }}
              >
                <img
                  className="our-img img-thumbnail"
                  src="/image/mobile.jpg"
                  alt="none"
                />
                <h5>Step:1</h5>
                <h4> Book thru mobile app. </h4>
              </div>
            </div>

            <div className="sectionB col mx-auto ">
              <div
                className="badge bg-primary text-wrap"
                style={{ width: "16rem" }}
              >
                <img
                  className="our-img img-thumbnail"
                  src="/image/vehicle.jpg"
                  alt="none"
                />
                <h5>Step:1</h5>
                <h4> We pick up your clothes. </h4>
              </div>
            </div>

            <div className="sectionC col mx-auto ">
              <div
                className="badge bg-primary text-wrap"
                style={{ width: "16rem" }}
              >
                <img
                  className="our-img img-thumbnail"
                  src="/image/machine.jpg"
                  alt="none"
                />
                <h5>Step:1</h5>
                <h4> We wash your clothes. </h4>
              </div>
            </div>
            <div className="sectionD col mx-auto ">
              <div
                className="badge bg-primary text-wrap"
                style={{ width: "16rem" }}
              >
                <img
                  className="our-img img-thumbnail"
                  src="/image/shirt.jpg"
                  alt="none"
                />
                <h5>Step:1</h5>
                <h4> We deliver clean,folded clothes. </h4>
              </div>
            </div>
          </div>
        </div>
      

    </>
  )
}

