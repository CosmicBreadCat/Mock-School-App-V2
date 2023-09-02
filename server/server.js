const express = require("express");
const sqlite = require("sqlite3").verbose();
const cors = require("cors");
const app = express();
let sql;

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
		if (err) return console.log(err.message);
	}
);

//your code here

app.listen(5000, () => {
	console.log("started server on port 5000");
});
