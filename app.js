console.log('javascript works');

//p1
function sum(numOne, numTwo){
  var total = (numOne + numTwo);
  return total;
  //console.log('the sum of ' + numOne + ' and ' + numTwo + ' is ' + total + '.');
}

//p2
function multiply(numOne, numTwo){
  var multiply = (numOne * numTwo);
  return multiply;
  //console.log('The product of ' + numOne + ' and ' + numTwo + ' is ' + multiply);
}

//p3
function sumAndMultiply(numOne, numTwo, numThree){
  var newSum = sum(numOne, numTwo);
  var lastSum = sum(newSum, numThree);
  var newMult = multiply(numOne, numTwo);
  var lastMult = multiply(newMult, numThree);
  console.log(numOne + ' and ' + numTwo + ' and ' + numThree + ' sum to ' + lastSum);
  console.log(numOne + ' and ' + numTwo + ' and ' + numThree + ' have a product of ' + lastMult);
  return [lastSum, lastMult];
}
