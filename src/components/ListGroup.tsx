function ListGroup() {
	let items = ["Tokyo", "Paris", "New York", "London", "Yangoon"];
	return (
		<>
			<h1>Lists</h1>
			{items.length === 0 && <p>No item found</p>}
			<ul className="list-group">
				{items.map((item) => (
					<li key={item} className="list-group-item">
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
