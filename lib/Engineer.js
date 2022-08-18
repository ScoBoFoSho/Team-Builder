const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, github) {
    super(name, id, email);

    this.gitHub = github;
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}
