//my first call back function using the forEachMethod. The callback function takes 3 parameters ie. the element, index, and array.
let numbers = [1,2,3,4,5];
numbers.forEach(function(number,index,array){
  console.log(`element ${number} is at index ${index} in array ${array}`);
})