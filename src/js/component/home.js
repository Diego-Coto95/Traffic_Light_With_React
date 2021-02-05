import React from "react";

//include images into your bundle
import { TrafficLight } from "./TrafficLight.js";

//create your first component
export function Home() {
	return (
		<div className="container mt-5">
			<TrafficLight />
		</div>
	);
}
