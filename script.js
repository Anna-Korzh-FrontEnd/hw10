"use strict";

//1:
class Employee {
    static vacation(){
        console.log("кол-во дней отпуска в году = 18");
    } 

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
    yearSalary (){
        return this.salary *12;
    }
}

const employee1 = new Employee("Ivan", "Ivanov", 38, "manager", 25000);
const employee2 = new Employee("Olga", "Petrova", 29, "accountant", 20000);

Employee.vacation();
console.log(employee1);
console.log(employee2);
console.log(employee1.yearSalary());
console.log(employee2.yearSalary());
