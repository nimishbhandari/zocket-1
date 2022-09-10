import React from "react";
import Stepper from "../Stepper/Stepper";

const Step2 = () => {
  return (
    <div className="step2_root">
      <div className="row">
        <div className="col-8">
          <h1>Your Ad Campaign</h1>
          <h6>Launch your ad in 4 easy steps</h6>
        </div>
      </div>
      <div className="row stepper_block">
        <div className="col-12">
          <Stepper />
        </div>
      </div>
    </div>
  );
};

export default Step2;
