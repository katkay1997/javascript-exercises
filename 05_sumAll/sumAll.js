const sumAll = function (arg1, arg2) {
    const max = Math.max(arg1, arg2);
    const min = Math.min(arg1, arg2);
    let sum = 0;
 
    for (let i = min;  i <= max; i++) {
        sum += i
    }
     return sum;
    }


// Do not edit below this line
module.exports = sumAll;

