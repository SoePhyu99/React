import ListGroup from "./components/ListGroup";

function App() {
	let items = ["Tokyo", "Paris", "New York", "London", "Yangoon"];
	let handleSelectItem = (item: String) => console.log(item);
	return (
		<div>
			<ListGroup
				items={items}
				heading={"Cities"}
				onSelectItem={handleSelectItem}
			/>
		</div>
	);
}

export default App;
