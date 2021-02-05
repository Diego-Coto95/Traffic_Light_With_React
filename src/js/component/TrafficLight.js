import React from "react";

export function TrafficLight() {
	return (
		<div className="content">
			<div className="square">
				<div className="circle bg-danger"></div>
			</div>
			<div className="square">
				<div className="circle bg-warning"></div>
			</div>
			<div className="square">
				<div className="circle bg-success"></div>
			</div>
		</div>
	);
}
