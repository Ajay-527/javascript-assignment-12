id = [1, 2, 3];
name = ["Hitanshu", "Ninad", "Amandeep"];
score = [90, 88, 92];

const employee = [
  { id: 1, name: "Hitanshu", score: 90 },
  { id: 2, name: "Ninad", score: 88 },
  { id: 2, name: "Amandeep", score: 92 },
];

console.log("Add data for 3 students (use map functions)");
console.log(
  employee.map(({ id, name, score }) => `\n${id} ${name} ${score}`).join("")
);
console.log("Get Student Names using map functions");
console.log(employee.map(({ name }) => `\n ${name} `).join(""));

console.log("Delete Student Scores using map functions");
employee.map((deleteScore) => {
  delete deleteScore.score;
});
console.log(employee);

console.log(
  "Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters value + key + map for the student"
);
console.log(employee.map(({ name }) => `${name}`));
console.log(employee.map(({ id, name }) => `${id} ${name}`));
console.log(employee.map(({ id, name, score }) => `${id} ${name} ${score}`));
