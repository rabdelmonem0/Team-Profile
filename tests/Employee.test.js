const { expect, it, test } = require('@jest/globals');
const { describe } = require('yargs');
const Employee = require('../roles/Employee');

// describe('Employee', () => {
//     it ('should return the name of the employee', () => {
//         //arrange 
//         const name = 'Rwan';
//         //act
//         const employee = new Employee(name)
//         //assert
//         expect(employee.name).toEqual('Rwan')
//     });
//     // it ('should set the id of the employee', () => {
//     //     const name = 'Rwan';
//     //     const id = 1;
//     //     const e
//     // })
// })
test("Can instantiate Employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name through constructor", () => {
    const name = "Bob";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id through constructor", () => {
    const testId = 1;
    const e = new Employee("Test", testId);
    expect(e.id).toBe(testId);
});
// email 
    // when instantiating new employee("TestName", 1, testEmail)

test("Can get name with getName() method", () => {
    const testName = "Jack";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
});

test("Can get name with getId() method", () => {
    const testIds = 1;
    const e = new Employee(testIds);
    expect(e.getId()).toBe(testIds);
});

test("Can get name with getRole() method", () => {
    const testRole = "Employee";
    const e = new Employee(testRole);
    expect(e.getRole()).toBe(testRole);
});

test("Can get name with getEmail() method", () => {
    const testEmail = email;
    const e = new Employee(testEmail);
    expect(e.getEmail()).toBe(testEmail);
});