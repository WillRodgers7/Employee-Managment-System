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
	mainMenu();
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
			// addDepartment(answers.newDepartment);
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
			// addRole(answers.newRole, answers.salary, answers.department);
		}
	);

	// logs the actual query being run
	console.log(query.sql);
}

function addEmployee(first_name, last_name, role_id, manager_id) {
	console.log("Inserting a new employee...\n");
	var query = connection.query(
		"INSERT INTO employee SET ?",
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
	connection.query("SELECT * FROM department", function (err, res) {
		if (err) throw err;
		// Log all results of the SELECT statement
		console.table(res);
	});
	mainMenu();
}

function viewRole() {
	console.log("Selecting all roles...\n");
	connection.query("SELECT * FROM roles", function (err, res) {
		if (err) throw err;
		// Log all results of the SELECT statement
		console.table(res);
	});
	mainMenu();
}

function viewEmployee() {
	console.log("Selecting all employees...\n");
	connection.query("SELECT * FROM employee", function (err, res) {
		if (err) throw err;
		// Log all results of the SELECT statement
		console.table(res);
	});
	mainMenu();
}


//   Update Roles
function updateRoles(role_id, employee_id) {

	employeeChoices = []

	for (let index = 0; index < employee_id.length; index++) {
		const element = array[index];
		
	}

const { selected_employee_id } = await prompt([
{_
	type: "list",
	name: "employeeId",
	message: "Which employee's role do you want to update?",
	choices: employeeChoices
}
]);

console.log("Updating employee role...\n");
var query = connection.query(
	"UPDATE employee SET ? WHERE ?",
	[
		{
			role_id: role_id,
		},
		{
			id: employee_id,
		},
	],
	function (err, res) {
		if (err) throw err;
		console.log(res.affectedRows + " employee updated!\n");
	}
);
};



function mainMenu() {
	inquirer
		.prompt({
			type: "list",
			name: "choice",
			message: "What would you like to do?",
			choices: [
				"View Department",
				"View Roles",
				"View Employees",
				"Create Department",
				"Create Role",
				"Create Employee",
				"Update Employee Role",
			],
		})
		.then((res) => {
			if (res.choice === "View Department") {
				viewDepartment();
			} else if (res.choice === "View Roles") {
				viewRole();
			} else if (res.choice === "View Employees") {
				viewEmployee();
			} else if (res.choice === "Create Department") {
				mainDepartment();
			} else if (res.choice === "Create Role") {
				mainRole();
			} else if (res.choice === "Create Employee") {
				mainEmployee();
			} else if (res.choice === "Update Employee Role") {
				mainUpdate();
			}
		});
}

// Create Employee
function mainEmployee() {
	console.log("creating employee");
	inquirer
		.prompt([
			{
				type: "input",
				name: "firstName",
				message: "What is the employees first name?",
			},
			{
				type: "input",
				name: "lastName",
				message: "What is the employees last name?",
			},
			{
				type: "input",
				name: "Role",
				message: "What is their role?",
			},
			{
				type: "input",
				name: "Manager",
				message: "Who is their manager?",
			},
		])

		.then((answers) => {
			console.info("Answer:", answers.firstName);
			console.info("Answer:", answers.lastName);
			console.info("Answer:", answers.Role);
			console.info("Answer:", answers.Manager);
			addEmployee(
				answers.firstName,
				answers.lastName,
				answers.Role,
				answers.Manager
			);
			mainMenu();
		});
}

// Create Role
function mainRole() {
	console.log("creating role");
	inquirer
		.prompt([
			{
				type: "input",
				name: "newRole",
				message: "What is the role title?",
			},
			{
				type: "input",
				name: "salary",
				message: "What is the salary?",
			},
			{
				type: "input",
				name: "department",
				message: "What is the department?",
			},
		])
		.then((answers) => {
			console.info("Answer:", answers.newRole);
			console.info("Answer:", answers.salary);
			console.info("Answer:", answers.department);
			addRole(answers.newRole, answers.salary, answers.department);

			mainMenu();
		});
}

// Create DepartmentTo

function mainDepartment() {
	console.log("creating department");
	inquirer
		.prompt([
			{
				type: "input",
				name: "newDepartment",
				message: "What is the Department?",
			},
		])
		.then((answers) => {
			console.info("Answer:", answers.newDepartment);
			addDepartment(answers.newDepartment);
			mainMenu();
		});
}

function mainUpdate() {
	console.log("updating employee");
	inquirer
		.prompt([
			{
				type: "input",
				name: "newUpdate",
				message: "What is the new department?",
			},
			{
				type: "input",
				name: "newUpdate2",
				message: "Who is the new manager?",
			},
		])
		.then((answers) => {
			console.info("Answer:", answers.newUpdate, answers.newUpdate2);
			updateRoles(answers.newUpdate, answers.newUpdate2);
			mainMenu();
		});
};

