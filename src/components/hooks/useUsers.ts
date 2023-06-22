import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userService, { User } from "../Server/user-service";

const useUsers = () => {
let [state, setState] = useState<User[]>([]);
	let [error, setError] = useState("");
	let [load, setLoad] = useState(false);
	useEffect(() => {
		setLoad(true);
		let { request, cancel } = userService.getAll<User>();
		request
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

		return () => cancel();
	}, []);

    return {state, error, load, setState, setError};
}

export default useUsers;