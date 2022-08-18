const Manager = require("../lib/Manager.js");
const manager = new Manager("Francisco", "262626", "ferrecisco@icloud.com");

test("test to see if we can get constructor values from employee in lib", () => {
  expect(manager.name).toBe("Francisco");
  expect(manager.id).toBe("262626");
  expect(manager.email).toBe("ferrecisco@icloud.com");
});

test("test to see if we can get name from getName() method", () => {
  expect(manager.getName()).toBe("Francisco");
});

test("test to see if we can get ID from getId() method", () => {
  expect(manager.getId()).toBe("262626");
});

test("test to see if we can get email from getEmail() method", () => {
  expect(manager.getEmail()).toBe("ferrecisco@icloud.com");
});

test("test to see if we can get role from getRole() method", () => {
  expect(manager.getRole()).toBe("Manager");
});
