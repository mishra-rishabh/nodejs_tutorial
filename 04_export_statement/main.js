const { data } = require("./utility");
const { person1, person2 } = require("./utility");

console.log(data);
console.log(person1, person2);

// we can beautify objects by using below function
console.log(JSON.stringify(person1, null, 2));