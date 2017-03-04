// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  var flatArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flatArray.push(arr[i]);
    } else {
      flatArray = flatArray.concat(steamrollArray(arr[i]));
    }
  }

  return flatArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);
