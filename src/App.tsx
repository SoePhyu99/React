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
		let originalUser = [...state];
		setState(state.filter((u) => u.id !== user.id));
		axios
			.delete("https://jsonplaceholder.typicode.com/users/" + user.id)
			.catch((err) => {
				setError(err.message);
				setState(originalUser);
			});
	};

	let addUser = () => {
		let originalUser = [...state];
		let user = { id: 11, name: "Mosh" };
		setState([...state, user]);
		axios
			.post("https://jsonplaceholder.typicode.com/users", user)
			.then(({ data }) => {
				setState([...state, data]);
			})
			.catch((e) => {
				setError(e.message);
				setState(originalUser);
			});
	};

	let updateUser = (user: User) => {
		let originalUser = [...state];
		let update = { ...user, name: user.name + " !" };
		setState(state.map((u) => (u.id === user.id ? update : u)));

		axios
			.patch(
				"https://jsonplaceholder.typicode.com/users/" + user.id,
				update
			)
			.catch((err) => {
				setError(err.message);
				setState(originalUser);
			});
	};

	return (
		<>
			{load && <div className="spinner-border"></div>}
			{error && <p className="text-danger">{error}</p>}
			<ul className="list-group m-3">
				<button onClick={addUser} className="btn mb-3 btn-dark">
					Add
				</button>
				{state.map((item) => (
					<li
						key={item.id}
						className="list-group-item d-flex justify-content-between pt-3"
					>
						{item.name}
						<div>
							<button
								className="btn btn-outline-secondary me-3"
								onClick={() => updateUser(item)}
							>
								<i className="bi bi-pencil-square"></i>
							</button>
							<button
								className="btn btn-outline-danger"
								onClick={() => deleteUser(item)}
							>
								<i className="bi bi-trash"></i>
							</button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
