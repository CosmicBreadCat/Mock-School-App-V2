import Home from "./components/home.js";
import About from "./components/about.js";
import Courses from "./components/courses.js";
import Accounts from "./components/accounts.js";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/accounts" element={<Accounts />} />
			</Routes>
		</div>
	);
}

export default App;
