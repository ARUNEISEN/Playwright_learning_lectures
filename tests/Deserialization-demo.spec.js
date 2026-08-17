import Employee from '../test-data/Employee.json';
import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Employee data validation', async () => {

    const emp = Employee.Employee;

    // A. Find employee's second mobile number
    const secondMobileNumber = emp.contact.mobile2;

    console.log('Second mobile number:', secondMobileNumber);

    // B. Verify employee has API skill
    expect(emp.skills).toContain('api');
});




test('Serialize Employee object into JSON', async () => {
    // 1. Create JavaScript Employee object
    const employee = {
        empname: "Arun",
        empid: 811617,

        contact: {
            mobile1: +916576456434,
            mobile2: +916599456434
        },

        skills: [
            "Manual",
            "Playwright Automation",
            "GenAI",
            "API"
        ]
    };

    // 2. Convert JavaScript object into JSON string
    const employeeJson = JSON.stringify(employee, null, 2);

    // 3. Write JSON string into employee.json
    fs.writeFileSync(
        './test-data/Employee2.json',
        employeeJson
    );

    // 4. Verify that JSON file was created
    expect(fs.existsSync('./test-data/employee.json')).toBeTruthy();

    console.log('Employee JSON created successfully');
});