import React from "react";
import Sidebar from "./component/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Campaign from "./component/Campaign";
import Step1 from "./component/Steps/Step1";
import Step2 from "./component/Steps/Step2";
import Step3 from "./component/Steps/Step3";
import Step4 from "./component/Steps/Step4";

const App = () => {
  return (
    <Router>
      <div className="root">
        <div className="row">
          <div className="col-1">
            <Sidebar />
          </div>
          <div className="col-11 root_main">
            <Routes>
              <Route path="/" element={<Campaign />} />
              <Route path="/step1" element={<Step1 />} />
              <Route path="/step2" element={<Step2 />} />
              <Route path="/step3" element={<Step3 />} />
              <Route path="/step4" element={<Step4 />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
