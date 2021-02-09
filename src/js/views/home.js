import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1>Crypto Calc</h1>
			<p>
				<img src={rigoImage} />
				<li>
					{" "}
					<h3>Position Size: </h3>
					<input type="text" />{" "}
				</li>
				<li>
					{" "}
					<h3> Account Size </h3>
					<input type="text" />{" "}
				</li>
				<li>
					{" "}
					<h3> Account Risk </h3>
					<input type="text" />{" "}
				</li>
				<li>
					{" "}
					<h3> Invalidation Point </h3>
					<input type="text" />{" "}
				</li>
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
