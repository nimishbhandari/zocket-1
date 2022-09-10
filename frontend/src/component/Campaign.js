import React from "react";
import { Link } from "react-router-dom";

const Campaign = () => {
  return (
    <div className="campaign_root">
      <div className="row">
        <div className="col-8">
          <h1>Your Campigns</h1>
          <h6>Check the list of campigns you created</h6>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <Link to="/step1">
            <button className="btn button-1 d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.5 19.25c4.813 0 8.75-3.938 8.75-8.75 0-4.813-3.938-8.75-8.75-8.75-4.813 0-8.75 3.938-8.75 8.75 0 4.813 3.938 8.75 8.75 8.75zM7 10.5h7M10.5 14V7"
                ></path>
              </svg>
              &nbsp; Create new Campaign
            </button>
          </Link>
        </div>
      </div>
      <section className="campaign_table">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6 ">
            <div className="search_main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11 20a9 9 0 100-18 9 9 0 000 18zM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97z"
                ></path>
              </svg>
              <input
                type="text"
                className="search_input"
                placeholder="Search for the campaign"
              />
            </div>
          </div>
          <div className="col-2">
            <span className="table_filter_header">Platform: &nbsp;</span>
            <select className="table_filter_select">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="col-2">
            <span className="table_filter_header">Status: &nbsp;</span>
            <select className="table_filter_select">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="col-2">
            <span className="table_filter_header">Time: &nbsp;</span>
            <select className="table_filter_select">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>

        <div className="row table_main">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">On/Off</th>
                <th scope="col">Campaign</th>
                <th scope="col">Date Range</th>
                <th scope="col">Clicks</th>
                <th scope="col">Budget</th>
                <th scope="col">Location</th>
                <th scope="col">Platform</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </td>

                <td>Campaign</td>
                <td>Date Range</td>
                <td>Clicks</td>
                <td>Budget</td>
                <td>Location</td>
                <td>Platform</td>
                <td>Status</td>
                <td>Actions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Campaign;
