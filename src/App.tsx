import ListGroup from "./components/ListGroup";

function App() {
	let items = ["Tokyo", "Paris", "New York", "London", "Yangoon"];
	return (
		<div>
			<ListGroup items={items} heading={"Cities"} />
		</div>
	);
}

export default App;
