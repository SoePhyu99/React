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

	let deleteUser = (user: User) => {
		setState(state.filter((u) => u.id !== user.id));
		axios
			.delete("https://jsonplaceholder.typicode.com/xusers/" + user.id)
			.catch((err) => {
				setError(err.message);
				setState([...state]);
			});
	};

	return (
		<>
			{load && <div className="spinner-border"></div>}
			{error && <p className="text-danger">{error}</p>}
			<ul className="list-group m-3">
				{state.map((item) => (
					<li
						key={item.id}
						className="list-group-item d-flex justify-content-between pt-3"
					>
						{item.name}
						<button
							className="btn btn-outline-danger"
							onClick={() => deleteUser(item)}
						>
							<i className="bi bi-trash"></i>
						</button>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
