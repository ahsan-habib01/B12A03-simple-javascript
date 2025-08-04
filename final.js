/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

console.log(area / 2);


/** Problem -02 ( Cycle or Laptop ) */
var money = 29999;
//write your code here

if (money >= 25000) {
  console.log('Laptop');
} else if (money >= 10000) {
  console.log('Cycle');
} else {
  console.log('Chocolate');
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for (var i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(i, '- medicine');
  } else {
    console.log(i, '- rest');
  }
}


/** Problem 04 - (Delete / Store) */
var fileName = 'pdfData.jpg';
//write your code here

if (fileName.slice(-4).includes('.pdf')) {
  console.log('Store');
} else if (fileName.slice(-5).includes('.docx')) {
  console.log('Store');
} else if (fileName[0].includes('#')) {
  console.log('Store');
} else {
  console.log('Delete');
}


/** Problem 05 - ( PH Email Generator )  */
var student = { name: 'jhankar', roll: 1014, department: 'cse' };
//write your code here

console.log(
  student.name + student.roll + '.' + student.department + '@ph.ac.bd'
);


/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

var currentSalary = startingSalary * (1 + 5 / 100) ** experience;

console.log(currentSalary.toFixed(2));
