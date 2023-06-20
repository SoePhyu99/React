import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
	let [state, setState] = useState(false);
	return (
		<div>
			{state && <Alert onClose={() => setState(false)}>My Alert</Alert>}
			<Button color="dark" onClick={() => setState(true)}>
				My Button
			</Button>
		</div>
	);
}

export default App;
