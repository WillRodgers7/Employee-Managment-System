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
	database: "employees_db",
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


// View: Department, Roles, Employees
function viewDepartment() {
	console.log("Selecting all departments...\n");
	connection.query("SELECT * FROM department", function(err, res) {
	  if (err) throw err;
	  // Log all results of the SELECT statement
	  console.log(res);
	  connection.end();
	});
	mainMenu();
  };

  function viewRole() {
	console.log("Selecting all roles...\n");
	connection.query("SELECT * FROM roles", function(err, res) {
	  if (err) throw err;
	  // Log all results of the SELECT statement
	  console.log(res);
	  connection.end();
	});
	mainMenu();
  };

  function viewEmployee() {
	console.log("Selecting all employees...\n");
	connection.query("SELECT * FROM employees", function(err, res) {
	  if (err) throw err;
	  // Log all results of the SELECT statement
	  console.log(res);
	  connection.end();
	});
	mainMenu();
  };



//   Update Roles
  function updateRoles(role_id, employee_id) {
	console.log("Updating employee role...\n");
	var query = connection.query(
	  "UPDATE employee SET ? WHERE ?",
	  [
		{
		  role_id: role_id,
		},
		{
		  id: employee_id,
		}
	  ],
	  function(err, res) {
		if (err) throw err;
		console.log(res.affectedRows + " employee updated!\n");
		
		
	  }
	)};


	function mainMenu() {
		inquirer.prompt({
			type: "list",
			name: "choice",
			message: "What would you like to do?",
			choices: ["View Department", "View Roles","View Employees", "Create Department", "Create Role", "Create Employee", "Update Employee Role"]

		}) .then((res)=>{
			if (res.choice === "View Department") {
				viewDepartment ();
			} 
			else if (res.choice === "View Roles"){
				viewRole ();
			}
			else if (res.choice === "View Employees"){
				viewEmployee ();
			}
			else if (res.choice === "Create Department"){
				addDepartment ();
			}
			else if (res.choice === "Create Role"){
				addRole ();
			}
			else if (res.choice === "Create Employee"){
				addEmployee ();
			}
			else if (res.choice === "Update Employee Role"){
				updateRoles ();
			}
			

		})
		
	}
