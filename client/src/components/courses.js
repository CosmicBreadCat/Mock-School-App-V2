import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Courses(props) {
	const [data, setData] = useState(null);
	const [searchField, setSearchField] = useState("");

	useEffect(() => {
		axios.get("http://localhost:5000/api/courses").then((res) => {
			setData(res.data.courses);
		});
	}, []);

	const handleChange = (e) => {
		setSearchField(e.target.value);
	};

	return (
		<div>
			{props.accType === "teacher" ? (
				<Link to="/coursesForm	">
					<p>Create course</p>
				</Link>
			) : null}
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
							.filter((course) => {
								return course.name
									.toLowerCase()
									.includes(searchField.toLowerCase());
							})
							.map((course) => {
								return (
									<div
										style={{ border: "solid", margin: "10px", padding: "10px" }}
									>
										<p>{course.id}</p>
										<p>{course.name}</p>
										<p>{course.desc}</p>
									</div>
								);
							})
					)}
				</div>
			</div>
		</div>
	);
}

export default Courses;
