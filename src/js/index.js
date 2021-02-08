//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { TrafficLight } from "./component/TrafficLight.js";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
