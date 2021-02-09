const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			positionSize: 0.0,
			accountSize: 0.0,
			accountRisk: 0.0,
			invalidationPoint: 0.0,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			setPositionSize: x => {
				console.log(x);
				setStore({ ["positionSize"]: x });
				console.log("Position Size set at: " + x);
			},
			setAccountSize: x => {
				console.log(x);
				setStore({ ["accountSize"]: x });
				console.log("Account Size set at: " + x);
			},
			setAccountRisk: x => {
				console.log(x);
				setStore({ ["accountRisk"]: x });
				console.log("Account Risk Size set at: " + x);
			},
			setInvalidationPoint: x => {
				console.log(x);
				setStore({ ["invalidationPoint"]: x });
				console.log("Invalidation point set at: " + x);
			}
		}
	};
};

export default getState;
