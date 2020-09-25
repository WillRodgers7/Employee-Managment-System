var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
	host: "localhost",

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "Wi7ll3ia7m!",
	database: "greatBay_DB",
});

// connect to the mysql server and sql database
connection.connect(function (err) {
	if (err) throw err;
	// run the start function after the connection is made to prompt the user
	start();
});

function addDepartment(name) {
	console.log("Inserting a new department...\n");
	var query = connection.query(
		"INSERT INTO department SET ?",
		{
			name: name,
		},
		function (err, res) {
			if (err) throw err;
			console.log(res.affectedRows + " department inserted!\n");
			// Call addDepartment AFTER the INSERT completes
			mainMenu();
		}
	);

	// logs the actual query being run
	console.log(query.sql);
}

function addRole(title, salary, department_id) {
	console.log("Inserting a new role...\n");
	var query = connection.query(
		"INSERT INTO department SET ?",
		{
			title: title,
			salary: salary,
			department_id: department_id,
		},
		function (err, res) {
			if (err) throw err;
			console.log(res.affectedRows + " role inserted!\n");
			// Call addDepartment AFTER the INSERT completes
			mainMenu();
		}
	);

	// logs the actual query being run
	console.log(query.sql);
}

function addEmployee(first_name, last_name, role_id, manager_id) {
	console.log("Inserting a new employee...\n");
	var query = connection.query(
		"INSERT INTO department SET ?",
		{
			first_name: first_name,
			last_name: last_name,
			role_id: role_id,
			manager_id: manager_id,
		},
		function (err, res) {
			if (err) throw err;
			console.log(res.affectedRows + " role inserted!\n");
			// Call addDepartment AFTER the INSERT completes
			mainMenu();
		}
	);

	// logs the actual query being run
	console.log(query.sql);
}
