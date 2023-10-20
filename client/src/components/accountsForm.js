import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function AccountsForm() {
	const [inputs, setInputs] = useState();
	const [classDisable, setClassDisable] = useState(true);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
		if (name === "accountType") {
			if (value === "student") {
				setClassDisable(false);
			} else {
				setClassDisable(true);
			}
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.put("http://localhost:5000/api/accountsForm", inputs).then((res) => {
			if (res.status === 200) {
				alert("Account created successfully");
			} else {
				alert(
					"There has been an error, please recheck your inputs and try again later later"
				);
			}
		});
	};

	return (
		<div>
			<Link to="/accounts">
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
							name="firstName"
							placeholder="Enter First Name"
							style={{ width: "60%" }}
							onChange={handleChange}
							required
						></input>
						<input
							name="lastName"
							placeholder="Enter Last Name"
							style={{ width: "60%" }}
							onChange={handleChange}
							required
						></input>
						<input
							name="age"
							type="number"
							placeholder="Enter Age"
							style={{ width: "60%" }}
							onChange={handleChange}
							required
						></input>
						<input
							name="email"
							type="email"
							placeholder="Enter Email"
							style={{ width: "60%" }}
							onChange={handleChange}
							required
						></input>
						<input
							name="phone"
							type="tel"
							placeholder="Enter Phone"
							style={{ width: "60%" }}
							onChange={handleChange}
							required
						></input>
						<input
							name="password"
							placeholder="Enter Password"
							style={{ width: "60%" }}
							onChange={handleChange}
							required
						></input>
						<div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
							<div>
								<input
									id="student"
									name="accountType"
									type="radio"
									value="student"
									onChange={handleChange}
									required
								></input>
								<label for="student">Student</label>
							</div>
							<div>
								<input
									id="teacher"
									name="accountType"
									type="radio"
									value="teacher"
									onChange={handleChange}
									required
								></input>
								<label for="teacher">Teacher</label>
							</div>
							<div>
								<input
									id="admin"
									name="accountType"
									type="radio"
									value="admin"
									onChange={handleChange}
									required
								></input>
								<label for="admin">Admin</label>
							</div>
						</div>
						<input
							name="class"
							placeholder="Enter Class"
							style={{ width: "60%" }}
							onChange={handleChange}
							disabled={classDisable}
							required
						></input>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AccountsForm;
