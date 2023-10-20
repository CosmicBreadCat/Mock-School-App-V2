import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Accounts() {
	const [data, setData] = useState(null);
	const [searchField, setSearchField] = useState("");
	const [deleteFlag, setDeleteFlag] = useState(false);

	useEffect(() => {
		axios.get("http://localhost:5000/api/accounts").then((res) => {
			setData(res.data.accounts);
		});
	}, [deleteFlag]);

	const handleChange = (e) => {
		setSearchField(e.target.value);
	};

	return (
		<div>
			<Link to="/accountsForm">
				<p>Create account</p>
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
				<div style={{ margin: "10px" }}>
					<input
						style={{ width: "100%", fontSize: "20px", maxHeight: "10%" }}
						onChange={handleChange}
					></input>
				</div>
				<div
					style={{
						overflowX: "hidden",
						overflowY: "scroll",
						maxHeight: "90%",
					}}
				>
					{data === null ? (
						<p>loading</p>
					) : (
						data
							.filter((acc) => {
								return acc.firstName
									.toLowerCase()
									.includes(searchField.toLowerCase());
							})
							.map((acc) => {
								return (
									<div
										style={{ border: "solid", margin: "10px", padding: "10px" }}
									>
										<p>{acc.id}</p>
										<p>
											{acc.firstName} {acc.lastName}
										</p>
										<p>{acc.accType}</p>
										<button
											onClick={async () => {
												axios
													.delete("http://localhost:5000/api/deleteAccounts", {
														data: { id: acc.id },
													})
													.then((res) => {
														if (res.status === 200) {
															alert("Account deleted successfully");
															setDeleteFlag(!deleteFlag);
														} else {
															alert(
																"There has been an error, please try again later"
															);
														}
													});
											}}
										>
											<p>Delete</p>
										</button>
									</div>
								);
							})
					)}
				</div>
			</div>
		</div>
	);
}

export default Accounts;
