const information = require('./information',);
let cowsay = require("cowsay");

console.log(cowsay.think({
    text : console.log(`Hi, my name is ${information.name} and I'm in ${information.campus}`),
}));
