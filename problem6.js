/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

var currentSalary = startingSalary * (1 + 5 / 100) ** experience;

console.log(currentSalary.toFixed(2));
