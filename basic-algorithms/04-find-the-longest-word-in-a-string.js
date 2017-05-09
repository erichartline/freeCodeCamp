/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  let longest = 0;
  let word = str.split(' ');
  word.forEach(function(words) {
    if (words.length > longest) {
      longest = words.length;
    }
  });
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
