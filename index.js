const information = require('./information',);
let cowsay = require("cowsay");

console.log(cowsay.say({
    text :`Hi, my name is ${information.name} and I'm in ${information.campus}`,
    e : "oO",
    T : "U "
}));

