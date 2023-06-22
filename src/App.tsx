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
	let [load, setLoad] = useState(false);
	useEffect(() => {
		let controller = new AbortController();
		setLoad(true);
		axios
			.get<User[]>("https://jsonplaceholder.typicode.com/users", {
				signal: controller.signal,
			})
			.then((res) => {
				setState(res.data);
				setLoad(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) {
					return;
				}
				setError(err.message);
				setLoad(false);
			});

		return () => controller.abort();
	}, []);

	return (
		<>
			{load && <div className="spinner-border"></div>}
			{error && <p className="text-danger">{error}</p>}
			{state.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</>
	);
}

export default App;
