import React from "react";

interface Props {
	items: string[];
	onClear: () => void;
}

const Cart = ({ items, onClear }: Props) => {
	return (
		<>
			<div>Cart</div>
			<ul>
				{items.map((items) => (
					<li key={items}>{items}</li>
				))}
			</ul>
			<button onClick={onClear}>Clear</button>
		</>
	);
};

export default Cart;
