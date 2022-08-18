const Intern = require("../lib/Intern.js");
const intern = new Intern(
  "Francisco",
  "262626",
  "ferrecisco@icloud.com",
  "Wofford"
);

test("test to see if we can get constructor values from employee in lib", () => {
  expect(intern.name).toBe("Francisco");
  expect(intern.id).toBe("262626");
  expect(intern.email).toBe("ferrecisco@icloud.com");
  expect(intern.school).toBe("Wofford");
});

test("test to see if we can get name from getName() method", () => {
  expect(intern.getName()).toBe("Francisco");
});

test("test to see if we can get ID from getId() method", () => {
  expect(intern.getId()).toBe("262626");
});

test("test to see if we can get email from getEmail() method", () => {
  expect(intern.getEmail()).toBe("ferrecisco@icloud.com");
});

test("test to see if we can get role from getRole() method", () => {
  expect(intern.getRole()).toBe("Intern");
});

test("test to see if we can get school from getSchool() method", () => {
  expect(intern.getSchool()).toBe("Wofford");
});
