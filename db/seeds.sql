

INSERT INTO department (name)
VALUES ("sales"), ("finance"), ("legal"), ("engineering");


INSERT INTO roles (title, salary, department_id)
VALUES ("lead salesman", 130000.00, 1), ("lawer", 150000.00, 3), ("lead engineer", 180000.00, 4), ("admin accountant", 170000.00, 2), ("Manager", 150000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Smith", 5, null ), ("Nathan", "Allen", 1, 1), ("Sarah", "Thompson", 1, 1),("Sally", "May", 1, 1);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("James", "Nun", 2, null ), ("Sam", "Roberts", 2, 5), ("Sarah", "Ellen", 2, 5),("Robert", "Jay", 2, 5);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Frank", "Randy", 3, null ), ("Ellise", "Schmidt", 3, 9), ("Daniel", "Franklin", 3, 9),("Dominique", "Salsy", 3, 9);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Todd", "Berry", 4, null ), ("May", "Hawkins", 4, 13), ("Elizabeth", "Hall", 4, 13), ("James", "Penny", 4, 13);