const faker = require("faker");
const _ = require("lodash");

const users = _.times(100, function(n) {
  return {
    id: n + 1,
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
    title: _.sample(["Director", "Manager"]),
    department: _.sample(["Customer Support", "Engineering", "Sales"]),
    status: "Active",
    role: "Owner"
  };
});

const proc = require("child_process").spawn("pbcopy");
proc.stdin.write(JSON.stringify(users));
proc.stdin.end();
