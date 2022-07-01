const palindromes = function (str) {
  const initial = sanitize(str)
  let reversed = '';

  for (const character of initial) {
    reversed = character + reversed;
  }
  return initial === reversed;

};

function sanitize(str) {
  return str.replace( /[^\w ]/g, '' ).toLowerCase();

};

// Do not edit below this line
module.exports = palindromes;
