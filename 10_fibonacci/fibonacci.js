
function fibonacci(n){
    const result = [0,1];
  
    for(let i = 2; i<=n; i+=1){
      const firstNum = result[i - 1];
      const secondNum = result[i - 2];
      result.push(firstNum + secondNum);
    };
    return result[n]
  };

// Do not edit below this line
module.exports = fibonacci;
