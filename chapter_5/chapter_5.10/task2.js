// Максимальная зарплата

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

console.log(topSalary(salaries));
console.log(topSalary({}));

function topSalary(salaries){
    let maxSalary = 0;
    let topSalaryOwner = null;

    for (let [name, salary] of Object.entries(salaries)){
        if (salary > maxSalary){
            [topSalaryOwner, maxSalary] = [name, salary];
        }
    }

    return topSalaryOwner;
}