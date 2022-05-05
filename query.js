const Database = require('better-sqlite3');

const db = Database('northwind.sqlite');

const statement = db.prepare('SELECT * FROM employees');
for (const employee of statement.iterate()) {
  console.log(`${employee.FirstName},${employee.LastName},${employee.BirthDate}`);
}

const filtered = db.prepare('SELECT * FROM employees WHERE LastName=?');
const employee = filtered.get('Dodsworth');
console.log(employee);
