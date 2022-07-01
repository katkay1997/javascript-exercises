const ftoc = function(f) {
   const c = (f - 32) * 5/9;

  return c;
};


const ctof = function(c) {
  const f = (c * 1.8) + 32;

  return f;
};



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

/* we are converting Fahrenheit to Celisus. In function(f), f represents the fahrenheit number. 
  Within the function f is equal to zero because zero is a placeholder within 
  the F to C equation.
   
*/


/*
  Do I need to use the F to C equation or use a method that uses the conversion.
   [°C] = ([°F] − 32) × 5⁄9
*/

/* C to F equation 
  [°F] = [°C] × 9⁄5(1.8) + 32 
*/