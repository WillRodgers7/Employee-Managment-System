

INSERT INTO department (name)
VALUES ("sales"), ("finance"), ("legal"), ("engineering");


INSERT INTO roles (title, salary, department_id)
VALUES ("lead salesman", 130000.00, 1), ("lawer", 150000.00, 3), ("lead engineer", 180000.00, 4), ("admin accountant", 170000.00, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Smith", 1, null ), ("Nathan", "Allen", 2, 1), ("Sarah", "Thompson", 3, 1),("Sally", "May", 4, 1);