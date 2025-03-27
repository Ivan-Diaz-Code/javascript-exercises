const add = function(numOne, numTwo) {
  
  let sum = numOne + numTwo;
  return sum;
	
};

const subtract = function(numOne, numTwo) {
  let sum = numOne - numTwo;
  return sum;
	
};

const sum = function(arr) {
  if(arr.length === 0)
  {
    return 0;
  }
  let sumAll = 0;
  for(let i = 0; i <arr.length; i++)
  {
    sumAll += arr[i];
  }
  return sumAll;
	
};

const multiply = function(arr) {
  let sumAll = arr[0];
  for(let i = 1; i <arr.length; i++)
  {
    sumAll = sumAll * arr[i];
  }
  return sumAll;

};

const power = function(base, exponent) {
  return Math.pow(base, exponent)
	
};

const factorial = function(n) {
	if (n === 0 || n === 1) {
    return 1;
}
  return n * factorial(n - 1);
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
