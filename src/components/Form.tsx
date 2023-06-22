import { FieldValues, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	name: z
		.string()
		.min(3, { message: "Name must contain at least 3 characters." }),
	age: z
		.number({ invalid_type_error: "Age field is required." })
		.min(18, { message: "Age must be 18." }),
});

type FormData = z.infer<typeof schema>;
const Form = () => {
	let {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	let onSubmit = (data: FieldValues) => {
		console.log(data);
	};
	return (
		<form className="m-5" onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					{...register("name", { required: true, minLength: 3 })}
					id="name"
					type="text"
					className="form-control"
				/>
				{errors.name && (
					<p className="text-danger m-0">{errors.name.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					{...register("age", { valueAsNumber: true })}
					id="age"
					type="number"
					className="form-control"
				/>
				{errors.age && (
					<p className="text-danger m-0">{errors.age.message}</p>
				)}
			</div>
			<button
				disabled={!isValid}
				type="submit"
				className="btn btn-dark mb-3"
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
