import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

import Popover from "react-bootstrap/Popover";

export const titlePopOver = (
	<Popover id="popoverPageTitle">
		<Popover.Title as="h3">by EdianSmells</Popover.Title>
		<Popover.Content>
			{" "}
			Be smart and <strong>learn</strong> as much as you can!
		</Popover.Content>
	</Popover>
);

export const accountSizePopOver = (
	<Popover id="popoveraccountSize">
		<Popover.Title as="h3">Account Size</Popover.Title>
		<Popover.Content>
			This is the total amount in your Account
			<br />
			<sub>{"Example: entering 150 would calculate to $150"}</sub>
		</Popover.Content>
	</Popover>
);
export const accountRiskPopOver = (
	<Popover id="popoveraccountRisk">
		<Popover.Title as="h3">Account Risk</Popover.Title>
		<Popover.Content>
			New traders usually only trade 1 or 2 percent of their total Account Size. This is to keep you from loosing
			as you learn.
			<br />
			<sub>{"Example: entering 1 will calculate at 1%"}</sub>
		</Popover.Content>
	</Popover>
);
export const profitTargetPopOver = (
	<Popover id="popoverProfitTarget">
		<Popover.Title as="h3">Profit Target</Popover.Title>
		<Popover.Content>
			This is the distance in percent from purchase to your sell-target.
			<br />
			<sub>{"Example: entering 5 would mean your sell-target is set 5% above purchase."}</sub>
		</Popover.Content>
	</Popover>
);
export const invalidationPointPopOver = (
	<Popover id="popoverInvalidatinPoint">
		<Popover.Title as="h3">Invalidation Point</Popover.Title>
		<Popover.Content>
			This is the distance in percent from purchase to your stop-loss.
			<br />
			<sub>{"Example: entering 5 would mean your stop loss is set 5% below purchase."}</sub>
		</Popover.Content>
	</Popover>
);
