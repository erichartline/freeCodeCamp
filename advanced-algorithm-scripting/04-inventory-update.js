/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
  var inventory = arr1.concat(arr2).reduce(function(acc, next) {
      if (acc[next[1]]) {
        acc[next[1]] += next[0];
      } else {
        acc[next[1]] = next[0];
      }
      return acc;
    }, {});

  return Object.keys(inventory).map(function(val) {
    return [inventory[val], val];
  }).sort(function(a,b) {
    if (a[1] === b[1]) {
      return 0;
    } else {
      if (a[1] < b[1]) {
        return -1;
      } else {
        return 1;
      }
    }
  });

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
