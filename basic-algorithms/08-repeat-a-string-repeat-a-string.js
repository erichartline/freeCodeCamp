/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 4);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);
