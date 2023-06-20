import { MouseEvent } from "react";

function ListGroup() {
	let items = ["Tokyo", "Paris", "New York", "London", "Yangoon"];

	// handler
	let handler = (e: MouseEvent) => console.log(e);
	return (
		<>
			<h1>Lists</h1>
			{items.length === 0 && <p>No item found</p>}
			<ul className="list-group">
				{items.map((item) => (
					<li
						key={item}
						className="list-group-item"
						onClick={handler}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
