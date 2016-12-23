/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    var letter = str.charCodeAt(i);

    if (letter !== str.charCodeAt(0) + i) {
        return String.fromCharCode(letter - 1);
     }
  }
  return undefined;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("bcd");
fearNotLetter("yz");
