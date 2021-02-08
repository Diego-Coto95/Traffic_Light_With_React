import React, { useState } from "react";

export const TrafficLight = () => {
	let [red, setRed] = useState("red");
	let [yellow, setYellow] = useState("yellow");
	let [green, setGreen] = useState("green");

	let redColor = () => {
		if (red == "red") {
			setRed("red color");
		}
		setYellow("yellow");
		setGreen("green");
	};

	let yellowColor = () => {
		if (yellow == "yellow") {
			setYellow("yellow color");
		}
		setRed("red");
		setGreen("green");
	};

	let greenColor = () => {
		if (green == "green") {
			setGreen("green color");
		}
		setRed("red");
		setYellow("yellow");
	};

	return (
		<div className="content">
			<div className="square">
				<div className={red} onClick={redColor}></div>
			</div>
			<div className="square">
				<div className={yellow} onClick={yellowColor}></div>
			</div>
			<div className="square">
				<div className={green} onClick={greenColor}></div>
			</div>
		</div>
	);
};
