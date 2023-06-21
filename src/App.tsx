import Like from "./components/like";
function App() {
	return (
		<>
			<Like onClick={() => console.log("clicked")}></Like>
		</>
	);
}

export default App;
