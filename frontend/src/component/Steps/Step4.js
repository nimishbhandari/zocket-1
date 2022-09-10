import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Stepper from "../Stepper/Stepper";

const Step4 = () => {
  const [active, setActive] = useState(0);
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
            <h2>What do you want to do? </h2>
            <h5>(Step 4 of 4)</h5>
          </div>
          <hr />
        </div>

        <div className="row conslusion">
          <div
            className={`col-3 ${active === 1 && "conslusion_active"}`}
            onClick={() => setActive(1)}
          >
            <div className="row">
              <div className="col-2">
                <img src="./images/sample_2.png" alt="" />
              </div>
              <div className="col-10">
                <h2>Nimish Cake shop</h2>
                <h6>Sponsored</h6>
              </div>
            </div>
            <div className="row">
              <p>
                We are the best bakery around you. Please like my page to get
                updates on exciting offers and discounts
              </p>
            </div>
            <div className="row">
              <img src="./images/sample_3.png" alt="" />
            </div>
          </div>
          <div
            className={`col-3 ${active === 2 && "conslusion_active"}`}
            onClick={() => setActive(2)}
          >
            <div className="row">
              <div className="col-2">
                <img src="./images/sample_2.png" alt="" />
              </div>
              <div className="col-10">
                <h2>Nimish Cake shop</h2>
                <h6>Sponsored</h6>
              </div>
            </div>
            <div className="row">
              <p>
                We are the best bakery around you. Please like my page to get
                updates on exciting offers and discounts
              </p>
            </div>
            <div className="row">
              <img src="./images/sample_4.png" alt="" />
            </div>
          </div>{" "}
          <div
            className={`col-3 ${active === 3 && "conslusion_active"}`}
            onClick={() => setActive(3)}
          >
            <div className="row">
              <div className="col-2">
                <img src="./images/sample_2.png" alt="" />
              </div>
              <div className="col-10">
                <h2>Nimish Cake shop</h2>
                <h6>Sponsored</h6>
              </div>
            </div>
            <div className="row">
              <p>
                We are the best bakery around you. Please like my page to get
                updates on exciting offers and discounts
              </p>
            </div>
            <div className="row">
              <img src="./images/sample_5.png" alt="" />
            </div>
          </div>{" "}
          <div
            className={`col-3 ${active === 4 && "conslusion_active"}`}
            onClick={() => setActive(4)}
          >
            <div className="row">
              <div className="col-2">
                <img src="./images/sample_2.png" alt="" />
              </div>
              <div className="col-10">
                <h2>Nimish Cake shop</h2>
                <h6>Sponsored</h6>
              </div>
            </div>
            <div className="row">
              <p>
                We are the best bakery around you. Please like my page to get
                updates on exciting offers and discounts
              </p>
            </div>
            <div className="row">
              <img src="./images/sample_6.png" alt="" />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-10"></div>
          <div className="col-2">
            <Link to="/">
              <button className="btn btn-block button-1">Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
