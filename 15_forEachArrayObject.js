class employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const empAnil = new employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new employee(66, "Sonali", "Finance", 45000, "Infy");
const empMonika = new employee(77, "Monika", "IT", 40000, "Wipro");
const empVinayak = new employee(88, "Vinayak", "IT", 75000, "TCS"); 
const empMahesh = new employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayemployee = [
  empAnil,
  empRadha,
  empRishi,
  empSonali,
  empMonika,
  empVinayak,
  empMahesh,
];
console.log("Find the employees whose name start with R....");
arrayemployee.forEach((employee) => {
  let empName = employee.empName;
  if (empName.startsWith("R")) {
    console.log(employee);
  }
});
