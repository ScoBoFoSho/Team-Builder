const Engineer = require("../lib/Engineer.js");
const engineer = new Engineer(
  "Francisco",
  "262626",
  "ferrecisco@icloud.com",
  "ScoBoFoSho"
);

test("test to see if we can get constructor values from Engineer in lib", () => {
  expect(engineer.name).toBe("Francisco");
  expect(engineer.id).toBe("262626");
  expect(engineer.email).toBe("ferrecisco@icloud.com");
  expect(engineer.github).toBe("ScoBoFoSho");
});

test("test to see if we can get name from getName() method", () => {
  expect(engineer.getName()).toBe("Francisco");
});

test("test to see if we can get ID from getId() method", () => {
  expect(engineer.getId()).toBe("262626");
});

test("test to see if we can get email from getEmail() method", () => {
  expect(engineer.getEmail()).toBe("ferrecisco@icloud.com");
});

test("test to see if we can get role from getRole() method", () => {
  expect(engineer.getRole()).toBe("Engineer");
});

test("test to see if we can get GitHub Username from getGithub() method", () => {
  expect(engineer.getGithub()).toBe("ScoBoFoSho");
});
