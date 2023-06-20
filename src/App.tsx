import ListGroup from "./components/ListGroup";
import "./App.css";
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
