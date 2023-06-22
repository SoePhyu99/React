import { useEffect, useRef, useState } from "react";
import Product from "./components/Product";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
	name: string;
	id: number;
}

function App() {
	let [state, setState] = useState<User[]>([]);
	let [error, setError] = useState("");
	useEffect(() => {
		let controller = new AbortController();
		axios
			.get<User[]>("https://jsonplaceholder.typicode.com/users", {
				signal: controller.signal,
			})
			.then((res) => setState(res.data))
			.catch((err) => {
				if (err instanceof CanceledError) {
					return;
				}
				setError(err.message);
			});

		return () => controller.abort();
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
