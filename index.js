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

function taxStat(totalSalary, tax) {
  let totalTaxDeduction = 0,
    averageTaxDeduction = 0,
    rate = 0.2,
    minSalary,
    maxSalary;

  let employeePayMinTax = {
    salary: "minSalary",
    minSalaryTax: "minSalaryTax",
    tax: "20%"
  }

  let employeePayMaxTax = {
    salary: "maxSalary",
    maxSalaryTax: "maxSalaryTax",
    tax: "20%"
  }

  for (let salary of totalSalary) {
    totalTaxDeduction = totalTaxDeduction + salary * rate;
    averageTaxDeduction = Math.floor(averageTaxDeduction + salary / totalSalary.length * rate)

    if (!minSalary) {
      minSalary = salary;
      maxSalary = salary;
    } else {
      if (minSalary > salary) {
        minSalary = salary
      }
    }
    if (maxSalary < salary) {
      maxSalary = salary
    }
    minSalaryTax = minSalary * rate;
    maxSalaryTax = maxSalary * rate;
  }

  return {
    totalTaxDeduction,
    averageTaxDeduction,
    employeePayMinTax: {
      minSalary, minSalaryTax, tax: "20%"
    },
    employeePayMaxTax: {
      maxSalary, maxSalaryTax, tax: "20%"
    }
  }
}

console.log(taxStat(totalSalary));