import React from "react";
import Stepper from "../Stepper/Stepper";
import { Link, useNavigate } from "react-router-dom";

const Step1 = () => {
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
            <h5>(Step 1 of 4)</h5>
          </div>
          <hr />
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get Leads as call</h3>
                <h4>Reach broad audience and get leads through calls</h4>
              </div>
            </div>
          </div>{" "}
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get Leads as call</h3>
                <h4>Reach broad audience and get leads through calls</h4>
              </div>
            </div>
          </div>{" "}
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get Leads as call</h3>
                <h4>Reach broad audience and get leads through calls</h4>
              </div>
            </div>
          </div>{" "}
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get Leads as call</h3>
                <h4>Reach broad audience and get leads through calls</h4>
              </div>
            </div>
          </div>{" "}
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get Leads as call</h3>
                <h4>Reach broad audience and get leads through calls</h4>
              </div>
            </div>
          </div>{" "}
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get Leads as call</h3>
                <h4>Reach broad audience and get leads through calls</h4>
              </div>
            </div>
          </div>{" "}
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get Leads as call</h3>
                <h4>Reach broad audience and get leads through calls</h4>
              </div>
            </div>
          </div>{" "}
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get Leads as call</h3>
                <h4>Reach broad audience and get leads through calls</h4>
              </div>
            </div>
          </div>{" "}
          <div className="col-3 step_1_card">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 22 22"
                >
                  <path
                    fill="#0F6EFF"
                    d="M3.667 0A3.667 3.667 0 000 3.667V6.6C0 15.105 6.895 22 15.4 22h2.933A3.667 3.667 0 0022 18.333v-2.027a2.2 2.2 0 00-1.216-1.967l-3.543-1.772a2.2 2.2 0 00-3.072 1.272l-.436 1.31a1.04 1.04 0 01-1.191.692A8.136 8.136 0 016.16 9.457a1.04 1.04 0 01.69-1.19l1.627-.543a2.2 2.2 0 001.438-2.62l-.86-3.439A2.2 2.2 0 006.923 0H3.667z"
                  ></path>
                  <path
                    fill="#0F6EFF"
                    d="M20.748.215L13.2 7.763V4.4h-1.467v5.867H17.6V8.8h-3.363l7.548-7.548L20.748.215z"
                  ></path>
                </svg>
              </div>
              <div className="col-10">
                <h3>Get Leads as call</h3>
                <h4>Reach broad audience and get leads through calls</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10"></div>
          <div className="col-2">
            <Link to="/step2">
              <button className="btn btn-block button-1">Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
