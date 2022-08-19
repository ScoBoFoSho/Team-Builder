// var mockData = [
//   {
//     name: "Francisco",
//     id: "35",
//     email: "email",
//     officeNumber: "office number",
//   },
//   {
//     name: "Hooman",
//     id: "30",
//     email: "email",
//     github: "HoomaGitHub",
//   },
//   {
//     name: "intern person",
//     id: "39",
//     email: "intern email",
//     github: "dfs",
//   },
//   {
//     name: "TRUE INTERN",
//     id: "fjsdlfjsdlfjldsjf",
//     email: "lksdjfklsj",
//     school: "Harvard",
//   },
// ];

const generateManager = (manager) => {
  // console.log(manager);

  let managerHtml = `
    <div class="card" style="width: 18 rem;">
    <div class="card=header">
    ${manager.name} <br/>
    <i class="fas fa-mug-hot"></i>Manager</div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
</div>
    `;
  return managerHtml;
};

const generateEngineer = (engineer) => {
  // console.log(engineer);
  let engineerHtml = `
<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${engineer.name} <br/>
    <i class=fas fa-glasses"></i>Engineer</div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
    <li class="list-group-item">GitHub Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
</div>
`;
  return engineerHtml;
};

const generateIntern = (intern) => {
  // console.log(intern);
  let internHtml = `
<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${intern.name} <br/>
    <i class="fas fa-user-graduate"></i>Intern</div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
    <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
`;
  return internHtml;
};

const generateTeam = (team) => {
  //   console.log(team);
  let html = "";
  // employee loop!!!
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      html += generateManager(team[i]);
    } else if (team[i].getRole() === "Engineer") {
      html += generateEngineer(team[i]);
    } else {
      html += generateIntern(team[i]);
    }
  }

  //   join HTML blocks
  return html;
};

module.exports = (teamArray) => {
  return `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap

    </head>
    <body>
        <header>
        <h1> My Team </h1>
        </header>

        <main> 
        ${generateTeam(teamArray)}
        </main>

    </body>
    </html>
    `;
};
