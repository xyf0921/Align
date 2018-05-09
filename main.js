// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
// console.log("Hello World!");

function check(n){
    if((n % 400) === 0){
        return true;
    }
    if((n % 100) === 0){
        return false;
    }
    if((n % 4) === 0){
        return true;
    }
    return false;
}


function printFib(n){
    if(n <= 2){
        return 1;
    }
    return printFib(n-2)+printFib(n-1);
}

var arguments = process.argv.splice(2)[0];
//console.log(arguments);
//console.log(check(arguments));
//console.log(printFib(arguments));

// const fibonacci = require('./lib/fibonacci')
// for(var i = 0; i < arguments; i++){
//     console.log(fibonacci(i));
// }

const drop = require('./lib/anagram')
var res = drop("abc",0)
console.log(res)






