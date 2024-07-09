function firstModule (module) {
    console.log ("My first module")
}
 firstModule ()

function myMultiplier (num) {
    return num * 2;
}

const result = myMultiplier(4);
console.log(result);

module.exports = myMultiplier ;
