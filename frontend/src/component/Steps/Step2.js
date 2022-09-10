import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Stepper from "../Stepper/Stepper";

const Step2 = () => {
  let navigate = useNavigate();
  return (
    <div className="step1_root">
      <div className="row">
        <div className="col-10">
          <h1>Your Ad Campaign</h1>
          <h6>Launch your ad in 4 easy steps</h6>
        </div>
        <button className="col-1 btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className="row stepper_block">
        <div className="col-12">
          <Stepper />
        </div>
      </div>

      <div className="step_1_main">
        <div className="row">
          <div className="col-12 d-flex">
            <h2>Choose the Product? </h2>
            <h5>(Step 2 of 4)</h5>
          </div>
          <hr />
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src="./images/sample_product1.png" alt="" />
              </div>
              <div className="col-9">
                <h3>Bluberry cake with raw toppings</h3>
                <h4>Rs 2980</h4>
              </div>
            </div>
          </div>
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src="./images/sample_product1.png" alt="" />
              </div>
              <div className="col-9">
                <h3>Bluberry cake with raw toppings</h3>
                <h4>Rs 2980</h4>
              </div>
            </div>
          </div>
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src="./images/sample_product1.png" alt="" />
              </div>
              <div className="col-9">
                <h3>Bluberry cake with raw toppings</h3>
                <h4>Rs 2980</h4>
              </div>
            </div>
          </div>
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src="./images/sample_product1.png" alt="" />
              </div>
              <div className="col-9">
                <h3>Bluberry cake with raw toppings</h3>
                <h4>Rs 2980</h4>
              </div>
            </div>
          </div>
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src="./images/sample_product1.png" alt="" />
              </div>
              <div className="col-9">
                <h3>Bluberry cake with raw toppings</h3>
                <h4>Rs 2980</h4>
              </div>
            </div>
          </div>
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src="./images/sample_product1.png" alt="" />
              </div>
              <div className="col-9">
                <h3>Bluberry cake with raw toppings</h3>
                <h4>Rs 2980</h4>
              </div>
            </div>
          </div>
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src="./images/sample_product1.png" alt="" />
              </div>
              <div className="col-9">
                <h3>Bluberry cake with raw toppings</h3>
                <h4>Rs 2980</h4>
              </div>
            </div>
          </div>
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src="./images/sample_product1.png" alt="" />
              </div>
              <div className="col-9">
                <h3>Bluberry cake with raw toppings</h3>
                <h4>Rs 2980</h4>
              </div>
            </div>
          </div>
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src="./images/sample_product1.png" alt="" />
              </div>
              <div className="col-9">
                <h3>Bluberry cake with raw toppings</h3>
                <h4>Rs 2980</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10"></div>
          <div className="col-2">
            <Link to="/step3">
              <button className="btn btn-block button-1">Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
