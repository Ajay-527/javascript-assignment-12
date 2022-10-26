let avgsalary = 0;
let numberOfElement = 0;
const employee = [
  { id: 67, name: "Hitanshu", salary: 75000 },
  { id: 48, name: "Ninad", salary: 82000 },
  { id: 29, name: "Amandeep", salary: 98000 },
];

console.log("Employees ID's");
console.log(employee.map(({ id }) => `${id}`));
console.log("Count of employees");
console.log(employee.map(({ id }) => `\n${id}\n`).length);
console.log("The name of the employee according to their Id");
console.log(employee.map(({ id, name }) => `\n${id}:${name}`).join(""));
console.log("The average salary the company is paying to its employees");
employee.map(({ salary }) => {
  avgsalary = avgsalary + salary;
  console.log(salary);
  numberOfElement++;
});
console.log("Avarage salary:" + avgsalary / numberOfElement);
