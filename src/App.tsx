import ListGroup from "./components/ListGroup";
function App() {
	let items = ["New York", "Paris", "London"];
	let heading = "Miami";
	let onSelectItem = (item: string) => {
		console.log(item);
	};
	return (
		<>
			<ListGroup
				items={items}
				heading={heading}
				onSelectItem={onSelectItem}
			></ListGroup>
		</>
	);
}

export default App;
