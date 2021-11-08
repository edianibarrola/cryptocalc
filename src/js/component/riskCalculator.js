import React, { useState, useEffect, useContext } from "react";
import { Button, OverlayTrigger } from "react-bootstrap";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Popover from "react-bootstrap/Popover";
import {
	titlePopOver,
	accountSizePopOver,
	accountRiskPopOver,
	profitTargetPopOver,
	invalidationPointPopOver
} from "./popOvers";

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
	// const titlePopOver = (
	// 	<Popover id="popoverPageTitle">
	// 		<Popover.Title as="h3">Popover right</Popover.Title>
	// 		<Popover.Content>
	// 			{" "}
	// 			And here some <strong>amazing</strong> conten
	// 		</Popover.Content>
	// 	</Popover>
	// );

	// alert(Math.floor(numerator) + "/" + Math.floor(denominator));

	return (
		<div className="container d-flex justify-content-center ">
			<div className="row d-inline-block text-center  mt-5">
				<div className="col boxStyle ">
					<OverlayTrigger trigger="hover" placement="top" overlay={titlePopOver}>
						<Button variant="success">
							<h1>Crypto Calc</h1>
						</Button>
					</OverlayTrigger>
				</div>
				<div className="col boxStyle">
					<OverlayTrigger trigger="hover" placement="top" overlay={accountSizePopOver}>
						<h3>Account Size</h3>
					</OverlayTrigger>

					<li>
						<input type="text" name="accountSize" onChange={e => actions.setAccountSize(e.target.value)} />{" "}
					</li>
				</div>
				<div className="col boxStyle">
					<OverlayTrigger trigger="hover" placement="top" overlay={accountRiskPopOver}>
						<h3>Account Risk in %</h3>
					</OverlayTrigger>
					<Form>
						<Form.Group controlId="accountRiskRange">
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
					<li>
						<input
							type="text"
							name="accountRisk"
							onChange={e => actions.setAccountRisk(e.target.value)}
							placeholder={store.accountRisk}
							value={store.accountRisk}
						/>{" "}
					</li>{" "}
				</div>
				<div className="col boxStyle">
					<OverlayTrigger trigger="hover" placement="top" overlay={profitTargetPopOver}>
						<h3> Profit Target Price</h3>
					</OverlayTrigger>
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
							<Form.Control
								type="range"
								min="0"
								max="100"
								step="0.1"
								onChange={e => actions.setProfitTarget(e.target.value)}
								placeholder={store.profitTarget}
								value={store.profitTarget}
							/>
						</Form.Group>
					</Form>
				</div>
				<div className="col boxStyle">
					<OverlayTrigger trigger="hover" placement="top" overlay={invalidationPointPopOver}>
						<h3> Invalidation Point Price</h3>
					</OverlayTrigger>

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
							<Form.Control
								type="range"
								min="0"
								max="100"
								step="0.1"
								onChange={e => actions.setInvalidationPoint(e.target.value)}
								placeholder={store.invalidationPoint}
								value={store.invalidationPoint}
							/>
						</Form.Group>
					</Form>
				</div>
				<div className="col boxStyle">
					<h3>
						position size =
						{(store.accountSize * (store.accountRisk / 100)) /
							(store.profitTarget - store.invalidationPoint)}
					</h3>
				</div>
			</div>
		</div>
	);
};
