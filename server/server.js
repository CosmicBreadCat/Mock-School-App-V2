const express = require("express");
const sqlite = require("sqlite3").verbose();
const cors = require("cors");
const app = express();

app.use(cors());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	next();
});
app.use(express.json());

const db = new sqlite.Database(
	"./database.db",
	sqlite.OPEN_READWRITE,
	(err) => {
		if (err) throw err.message;
	}
);

app.get("/api/accounts", (req, res) => {
	let sql = "SELECT * FROM Accounts";
	let accountsList = [];
	db.all(sql, [], (err, rows) => {
		if (err) throw err.message;
		rows.forEach((row) => {
			accountsList.push({
				id: row.id,
				firstName: row.FirstName,
				lastName: row.LastName,
				accType: row.AccType,
			});
		});
		res.send({ accounts: accountsList });
	});
});

app.put("/api/accountsForm", (req, res) => {
	if (req.body.accountType === "student") {
		let sql =
			"INSERT INTO Accounts(FirstName, LastName, Class, Age, Password, Email, Phone, AccType) VALUES (?,?,?,?,?,?,?,?)";
		db.all(
			sql,
			[
				req.body.firstName,
				req.body.lastName,
				req.body.class,
				req.body.age,
				req.body.password,
				req.body.email,
				req.body.phone,
				req.body.accountType,
			],
			(err) => {
				if (err) {
					res.sendStatus(500);
					throw err.message;
				} else {
					res.sendStatus(200);
				}
			}
		);
	} else {
		let sql =
			"INSERT INTO Accounts(FirstName, LastName, Age, Password, Email, Phone, AccType) VALUES (?,?,?,?,?,?,?)";
		db.all(
			sql,
			[
				req.body.firstName,
				req.body.lastName,
				req.body.age,
				req.body.password,
				req.body.email,
				req.body.phone,
				req.body.accountType,
			],
			(err) => {
				if (err) {
					res.sendStatus(500);
					throw err.message;
				} else {
					res.sendStatus(200);
				}
			}
		);
	}
});

app.delete("/api/deleteAccounts", (req, res) => {
	let sql = "DELETE FROM Accounts WHERE id = ?";
	db.all(sql, [req.body.id], (err) => {
		if (err) {
			res.sendStatus(500);
			throw err.message;
		} else {
			res.sendStatus(200);
		}
	});
});

app.get("/api/courses", (req, res) => {
	let sql = "SELECT * FROM Courses";
	let coursesList = [];
	db.all(sql, [], (err, rows) => {
		if (err) throw err.message;
		rows.forEach((row) => {
			if (err) throw err.message;
			coursesList.push({
				id: row.id,
				name: row.Name,
				desc: row.Description,
			});
		});
		res.send({ courses: coursesList });
	});
});

app.put("/api/coursesform", (req, res) => {
	let sql = "INSERT INTO Courses()";
});

app.post("/api/login", (req, res) => {
	let sql = `SELECT * FROM Accounts WHERE ID = '${req.body.id}' AND Password = '${req.body.password}'`;
	db.all(sql, [], (err, rows) => {
		if (err) throw err.message;
		if (rows.length > 0) {
			res.send({ found: true, id: rows[0].ID, accType: rows[0].AccType });
		} else {
			res.send({ found: false });
		}
	});
});

app.listen(5000, () => {
	console.log("started server on port 5000");
});
