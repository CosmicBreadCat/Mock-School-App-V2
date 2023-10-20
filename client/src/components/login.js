import { useState } from "react";
import axios from "axios";

function Login(props) {
	const [inputs, setInputs] = useState([{}]);

	const changeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post("http://localhost:5000/api/login", inputs).then((res) => {
			if (res.data.found) {
				props.loginFunc(true);
				props.accTypeFunc(res.data.accType);
			}
		});
	};

	return (
		<div>
			<p>login</p>
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexWrap: "wrap",
					maxWidth: "500px",
					gap: "10px",
				}}
			>
				<input
					name="id"
					onChange={changeHandler}
					style={{ flex: "100%", maxWidth: "80%" }}
				></input>
				<input
					name="password"
					onChange={changeHandler}
					style={{ flex: "100%", maxWidth: "80%" }}
				></input>
				<button type="submit" style={{ flex: "100%", maxWidth: "30%" }}>
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
