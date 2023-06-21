import { useState } from "react";

function App() {
	const [pizza, setPizza] = useState({
		name: "spicy",
		toppings: ["cheese"],
	});
	const handle = () => {
		setPizza({ ...pizza, toppings: [...pizza.toppings, "Choco"] });
	};
	return (
		<>
			<h2>Pizza Name : {pizza.name}</h2>
			<p>Toppings</p>
			<ul>
				{pizza.toppings.map((top) => (
					<li key={top}>{top}</li>
				))}
			</ul>

			<button onClick={handle}>Change</button>
		</>
	);
}

export default App;
