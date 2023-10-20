import { Link } from "react-router-dom";
function Navbar(props) {
	return (
		<div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
			<Link to="/">
				<p>Home</p>
			</Link>
			{props.isLoggedIn === true ? (
				<Link to="/courses">
					<p>Courses</p>
				</Link>
			) : null}
			{props.accType === "admin" ? (
				<Link to="/accounts">
					<p>Accounts</p>
				</Link>
			) : null}
			<Link to="/about">
				<p>About</p>
			</Link>
			<Link to="/login">
				<p>Login</p>
			</Link>
		</div>
	);
}

export default Navbar;
