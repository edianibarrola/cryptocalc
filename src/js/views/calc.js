import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Calc = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	console.log(actions);

	const info = store;
	console.log(info);
	// const [calculation, setCalculation] = useState({
	// 	name: info.full_name,
	// 	email: info.email,
	// 	phone: info.phone,
	// 	address: info.address,
	// 	id: info.id
	// });

	return (
		<div className="text-center mt-5">
			<h1>Crypto Calc</h1>
			<p>
				<li>
					{" "}
					<h3>Position Size: </h3>
					<input
						type="text"
						name="positionSize"
						onChange={e => actions.setPositionSize(e.target.value)}
					/>{" "}
				</li>
				<li>
					{" "}
					<h3> Account Size </h3>
					<input type="text" name="accountSize" onChange={e => actions.setAccountSize(e.target.value)} />{" "}
				</li>
				<li>
					{" "}
					<h3> Account Risk in % </h3>
					<input type="text" name="accountRisk" onChange={e => actions.setAccountRisk(e.target.value)} />{" "}
				</li>
				<li>
					{" "}
					<h3> Invalidation Point </h3>
					<input
						type="text"
						name="invalidationPoint"
						onChange={e => actions.setInvalidationPoint(e.target.value)}
					/>{" "}
				</li>
			</p>
			<li>
				Position Size = {(store.accountSize * (store.accountRisk / 100)) / (store.invalidationPoint / 100)}{" "}
			</li>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
