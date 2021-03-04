import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";

export const RiskCalculator = () => {
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
	var gcd = function(a, b) {
		console.log(a);
		console.log(b);
		if (b < 0.0000001) return a; // Since there is a limited precision we need to limit the value.

		return gcd(b, Math.floor(a % b)); // Discard any fractions due to limitations in precision.
	};
	const getFraction = () => {
		var fraction = store.invalidationPoint / store.profitTarget;
		var len = fraction.toString().length - 2;

		var denominator = Math.pow(10, len);
		var numerator = fraction * denominator;

		var divisor = gcd(numerator, denominator); // Should be 5

		numerator /= divisor; // Should be 687
		denominator /= divisor; // Should be 2000
		console.log(numerator);
		console.log(denominator);
		return numerator, denominator;
	};

	// alert(Math.floor(numerator) + "/" + Math.floor(denominator));

	return (
		<div className="container">
			<div className="text-center mt-5">
				<h1>Crypto Calc</h1>
				<h3>by EdianSmells</h3>
				<p>
					<h3> Account Size </h3>
					<sub> This is the total amount in your Account</sub>
					<sub>{"Example: entering 150 would calculate to $150"}</sub>
					<li>
						<input type="text" name="accountSize" onChange={e => actions.setAccountSize(e.target.value)} />{" "}
					</li>{" "}
					<h3> Account Risk in %</h3>
					<sub>{"New traders want to only trade 1 or 2 percent of their total Account Size"} </sub>
					<sub> {"this is to keep you from loosing as you learn."} </sub>
					<sub> {"Example: entering 1 will calculate at 1%"} </sub>
					<li>
						<input
							type="text"
							name="accountRisk"
							onChange={e => actions.setAccountRisk(e.target.value)}
							placeholder={store.accountRisk}
							value={store.accountRisk}
						/>{" "}
					</li>{" "}
					<Form>
						<Form.Group controlId="accountRiskRange">
							<Form.Label>Range</Form.Label>
							<Form.Control
								type="range"
								min="0"
								max="100"
								step="0.5"
								onChange={e => actions.setAccountRisk(e.target.value)}
								placeholder={store.accountRisk}
								value={store.accountRisk}
							/>
						</Form.Group>
					</Form>
					<h3> Profit Target </h3>
					<sub>{"This is the distance in percent from purchase to your sell-target."}</sub>
					<sub>{"Example: entering 5 would mean your sell-target is set 5% above purchase."}</sub>
					<li>
						<input
							type="text"
							name="profitTarget"
							placeholder={store.profitTarget}
							value={store.profitTarget}
							onChange={e => actions.setProfitTarget(e.target.value)}
						/>{" "}
					</li>
					<Form>
						<Form.Group controlId="profitTargetRange">
							<Form.Label>Range</Form.Label>
							<Form.Control
								type="range"
								min="0"
								max="100"
								step="0.5"
								onChange={e => actions.setProfitTarget(e.target.value)}
								placeholder={store.profitTarget}
								value={store.profitTarget}
							/>
						</Form.Group>
					</Form>
					<h3> Invalidation Point </h3>
					<sub>{"This is the distance in percent from purchase to your stop-loss."}</sub>
					<sub>{"Example: entering 5 would mean your stop loss is set 5% below purchase."}</sub>
					<li>
						<input
							type="text"
							name="invalidationPoint"
							placeholder={store.invalidationPoint}
							value={store.invalidationPoint}
							onChange={e => actions.setInvalidationPoint(e.target.value)}
						/>{" "}
					</li>
					<Form>
						<Form.Group controlId="invalidationPointRange">
							<Form.Label>Range</Form.Label>
							<Form.Control
								type="range"
								min="0"
								max="100"
								step="0.5"
								onChange={e => actions.setInvalidationPoint(e.target.value)}
								placeholder={store.invalidationPoint}
								value={store.invalidationPoint}
							/>
						</Form.Group>
					</Form>
				</p>
				<li>Position Size = {store.accountSize * (store.accountRisk / 100)} </li>
				{/* <button onClick={() => getFraction()}> ratio calculate </button> */}
				<li>Risk to Reward Ratio ={store.invalidationPoint / store.profitTarget} </li>
			</div>
		</div>
	);
};
