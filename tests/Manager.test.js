const Manager = require("../roles/Manager");
const Employee = require("../roles/Employee");
const { TestScheduler } = require("@jest/core");

// still need to instantiate the Manager in each test, but we do need to pass it all the attributes

test("Can set office number with constructor", () => {
    const testNum = 250;
    const newManager = new Manager("Bob", 2, "test@test.com", testNum);
    expect(newManager.officeNumber).toBe(testNum)
    // expect that the newManager.officeNumber = testNum
});

// test getOffice()
test("Calling getOfficeNumber function for manager returns '130'", () =>{
    //instantiate
    const newON = new Manager("Bar", 1, "test@test.com", 130);
    expect(newON.getOfficeNumber()).toBe(130);
});
// test getRole()
test("Calling getRole function for manager returns 'Manager'", () =>{
    //instantiate
    const newM = new Manager("Bar", 1, "test@test.com", 130);
    expect(newM.getRole()).toBe("Manager");
});
