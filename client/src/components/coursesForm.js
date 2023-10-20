import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function CoursesForm() {
	const [inputs, setInputs] = useState();

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.put("http://localhost:5000/api/coursesForm", inputs).then((res) => {
			if (res.status === 200) {
				alert("Course created successfully");
			} else {
				alert(
					"There has been an error, please recheck your inputs and try again later later"
				);
			}
		});
	};

	return (
		<div>
			<Link to="/courses">
				<p>Back </p>
			</Link>
			<div
				style={{
					border: "solid",
					margin: "10px",
					padding: "10px",
					height: "600px",
					width: "550px",
				}}
			>
				<form onSubmit={handleSubmit}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
							alignItems: "center",
						}}
					>
						<input
							name="course name"
							placeholder="Enter Course Name"
							style={{ width: "60%" }}
							onChange={handleChange}
							required
						></input>
						<input
							name="course desc"
							placeholder="Enter Course Description"
							style={{ width: "60%" }}
							onChange={handleChange}
							required
						></input>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CoursesForm;
