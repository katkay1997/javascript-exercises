const add = function(num1, num2) {
  return  num1 + num2;
};

const subtract = function (a, b) {
    return a - b;
	
};

const sum = function(n,p) {
	answer = 0;
  for (let i = n; i <= p ; i++) {
    answer = answer + i;
    return answer;
  }

};

const multiply = function(d, e) {
  return d * e;
};

const power = function(f, g) {
	return f ^ g;
};

const factorial = function(num) {
  if (num < 2)
  return num;
  let result = 1;
  for (let i = result; i <= num; i += 1) {
    result = result * i
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


/* 
function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}
let n = 6;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);
*/