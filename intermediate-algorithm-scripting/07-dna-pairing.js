/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  str = str.split('');
  var paired = [];
  for (var i = 0; i < str.length; i++) {
    paired.push([str[i], DNA(str[i])]);
  }

  function DNA(letter) {
    switch(letter) {
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      default:
        return 0;
    }
  }

  return paired;
}

pairElement("GCG");
pairElement("ATCGA");
pairElement("TTGAG");
pairElement("CTCTA");
