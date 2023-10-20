import Home from "./components/home.js";
import About from "./components/about.js";
import Courses from "./components/courses.js";
import CoursesForm from "./components/coursesForm.js";
import Accounts from "./components/accounts.js";
import AccountsForm from "./components/accountsForm.js";
import Login from "./components/login.js";
import Navbar from "./components/navbar.js";
import Protected from "./Protected.js";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [accType, setAccType] = useState();
	const [accId, setAccID] = useState();

	return (
		<div>
			<Navbar accType={accType} isLoggedIn={isLoggedIn} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/login"
					element={
						<Login
							loginFunc={setIsLoggedIn}
							accTypeFunc={setAccType}
							accIdFunc={setAccID}
						/>
					}
				/>
				<Route path="/about" element={<About />} />
				<Route
					path="/courses"
					element={
						<Protected isLoggedIn={isLoggedIn}>
							<Courses accType={accType} />
						</Protected>
					}
				/>
				<Route
					path="/accounts"
					element={
						<Protected isLoggedIn={isLoggedIn}>
							<Accounts accType={accType} />
						</Protected>
					}
				/>
				<Route
					path="/accountsForm"
					element={
						<Protected isLoggedIn={isLoggedIn}>
							<AccountsForm />
						</Protected>
					}
				/>
				<Route
					path="/coursesForm"
					element={
						<Protected isLoggedIn={isLoggedIn}>
							<CoursesForm />
						</Protected>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
