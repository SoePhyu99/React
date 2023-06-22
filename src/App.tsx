import { useEffect, useRef, useState } from "react";
import Product from "./components/Product";
import axios from "axios";

interface User {
	name: string;
	id: number;
}

function App() {
	let [state, setState] = useState<User[]>([]);
	let [error, setError] = useState("");
	useEffect(() => {
		axios
			.get<User[]>("https://jsonplaceholder.typicode.com/users")
			.then((res) => setState(res.data))
			.catch((e) => setError(e.message));
	}, []);

	return (
		<>
			<p className="text-danger">{error}</p>
			{state.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</>
	);
}

export default App;
