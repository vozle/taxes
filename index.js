const totalSalary = [];

for (let a = 0; a < 5; a++) {
  totalSalary.push(10000);
}
for (let b = 0; b < 15; b++) {
  totalSalary.push(25000);
}
for (let c = 0; c < 40; c++) {
  totalSalary.push(50000);
}
for (let d = 0; d < 10; d++) {
  totalSalary.push(100000);
}

let totalTaxDeductions = totalSalary.map(i => x += i, x = 0).reverse()[0] * 0.2;
function averageTaxDeducation(arr) {
  return arr.reduce((partial_sum, a) => partial_sum + a, 0) / arr.length * 0.2;
}

console.log("Cуммарные налоговые отчисления со всех зарплат: " + totalTaxDeductions + " RUR");
console.log("Cредние налоговые отчисления на человека в рублях: " + Math.floor(averageTaxDeducation(totalSalary)) + " RUR");