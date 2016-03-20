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

//p4
function sumArray(oneArray){
  var sumNow = 0;
  for (i = 0; i < oneArray.length; i++) {
    numNow = oneArray[i];
    sumNow += numNow;
    console.table(oneArray);
    console.log(oneArray + ' was passed in as an array of numbers, and ' + sumNow + ' is their sum.');
  }
  return sumNow;
}

//p5 Thanks to Stephanie Hansen for the codereview
