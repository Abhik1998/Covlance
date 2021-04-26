const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "abhik1998",
	database: "Avail"
});


  app.post('/edit',(req, res) => {

	const area = req.body.area;
	const city = req.body.city;
	const state = req.body.state;
	const avail = req.body.avail;
	const contact = req.body.contact;

	db.query("INSERT INTO availability (Area, City, State, Avail, Contact) VALUES (?,?,?,?,?)", [area, city, state, avail, contact], (err, result) => {
		console.log(err);
	});
  })
app.listen(5000, () => {
	console.log("running server");
});
