import { useState } from "react";

function App() {
	const [cart, setCart] = useState({
		discount: 0.1,
		items: [
			{ id: 1, name: "product 1", quantity: 1 },
			{ id: 2, name: "product 2", quantity: 1 },
		],
	});
	const handle = () => {
		setCart({
			...cart,
			items: cart.items.map((item) =>
				item.id === 1 ? { ...item, quantity: 2 } : item
			),
		});
	};
	return (
		<>
			<h2>Discount : {cart.discount}</h2>
			<p>Items</p>
			<ul>
				{cart.items.map((item) => (
					<li key={item.id}>
						{" "}
						Name: {item.name} Quantity: {item.quantity}
					</li>
				))}
			</ul>

			<button onClick={handle}>Change</button>
		</>
	);
}

export default App;
