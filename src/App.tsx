import { useEffect, useRef, useState } from "react";
import Product from "./components/Product";
import axios, { AxiosError } from "axios";

interface User {
	name: string;
	id: number;
}

function App() {
	let [state, setState] = useState<User[]>([]);
	let [error, setError] = useState("");
	useEffect(() => {
		let fetchUser = async () => {
			try {
				let fetch = await axios.get<User[]>(
					"https://jsonplaceholder.typicode.com/users"
				);
				setState(fetch.data);
			} catch (error) {
				setError((error as AxiosError).message);
			}
		};
		fetchUser();
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
