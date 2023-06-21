import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
	const [person, setPerson] = useState({
		name: "",
		age: "",
	});
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log(person);
	};
	return (
		<form className="m-5" onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					value={person.name}
					onChange={(e) =>
						setPerson({ ...person, name: e.target.value })
					}
					id="name"
					type="text"
					className="form-control"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					value={person.age}
					onChange={(e) =>
						setPerson({ ...person, age: parseInt(e.target.value) })
					}
					id="age"
					type="number"
					className="form-control"
				/>
			</div>
			<button type="submit" className="btn btn-dark">
				Submit
			</button>
		</form>
	);
};

export default Form;
