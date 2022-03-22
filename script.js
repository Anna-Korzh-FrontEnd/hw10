"use strict";

//1:
class Employee {
    static vacation = "кол-во дней отпуска в году = 18";
    

    constructor(firstName, lastName, age, jobPosition, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobPosition = jobPosition;
        this.salary = salary;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get calculateYearSalary (){
        return this.salary *12;
    }
}

const employee1 = new Employee("Ivan", "Ivanov", 38, "manager", 25000);
const employee2 = new Employee("Olga", "Petrova", 29, "accountant", 20000);

console.log(Employee.vacation);
console.log(employee1);
console.log(employee2);
employee1.fullName;
employee2.fullName;

console.log(employee1.calculateYearSalary);
console.log(employee2.calculateYearSalary)
