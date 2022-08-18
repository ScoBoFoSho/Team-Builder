const Employee = require("../lib/Employee.js");
const employee = new Employee("Francisco", "262626", "ferrecisco@icloud.com");

test("test to see if we can get constructor values from employee in lib", () => {
  expect(employee.name).toBe("Francisco");
  expect(employee.id).toBe("262626");
  expect(employee.email).toBe("ferrecisco@icloud.com");
});

test("test to see if we can get name from getName() method", () => {
  expect(employee.getName()).toBe("Francisco");
});

test("test to see if we can get ID from getId() method", () => {
  expect(employee.getId()).toBe("262626");
});

test("test to see if we can get email from getEmail() method", () => {
  expect(employee.getEmail()).toBe("ferrecisco@icloud.com");
});

test("test to see if we can get role from getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
