import Button from "./components/Button/Button";
function App() {
	return (
		<Button color="dark" onClick={() => console.log("hello world")}>
			My Button
		</Button>
	);
}

export default App;
