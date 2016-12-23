/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  var fullArray = createArray(arr);
  var counter = 1;
  var passed;

  while (true) {
    passed = fullArray.every(function(multiple) {
      return counter % multiple === 0;
    });
    if (passed) {
      return counter;
    } else {
      counter++;
    }
  }

  function createArray(arr) {
    var fullArray = [];
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);

    for (var i = min; i <= max; i++) {
      fullArray.push(i);
    }
    return fullArray;
  }
}


smallestCommons([1,5]);
smallestCommons([5, 1]);
smallestCommons([1, 13]);
smallestCommons([23, 18]);
