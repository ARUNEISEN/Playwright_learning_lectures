class Employee{
    constructor(name, role, salary){
        this.name = name;
        this.role = role;
        this.salary = salary;
    }

    displaySalary(){
        console.log(`${this.name} who is working as ${this.role} and his monthly salary ${this.salary} has been credited for AUG-2026`);
        }
}

const emp1 = new Employee('Arun', 'QA Engineer', 92000);
emp1.displaySalary()
emp1.salary = -4777;
emp1.displaySalary()
const emp2 = new Employee('Bala', 'QA Architect', 292000);
emp2.displaySalary()
