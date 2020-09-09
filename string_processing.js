const input = 'KasdPd3sfoin0eJInoZ';
const process = function(S) {
let upperCaseLetters = 0;
testedSubstrings = [];
singleTestedSubstring = '';

function isUpperCase(str) {
  return str === str.toUpperCase();
}

for (j = 0; j < S.length; j++) {
  for (i = j; i < S.length; i++) {
    if (i == S.length - 1 && isNaN(S[i])) {
      singleTestedSubstring += S[i];
      testedSubstrings.push(singleTestedSubstring);
      upperCaseLetters = 0;
      singleTestedSubstring = '';
    } else {
      if (isUpperCase(S[i]) && isNaN(S[i])) {
        upperCaseLetters++;
        singleTestedSubstring += S[i];
        testedSubstrings.push(singleTestedSubstring);
      } else if (!isNaN(S[i])) {
        if (upperCaseLetters > 0) {
          testedSubstrings.push(singleTestedSubstring);
        }
        singleTestedSubstring = '';
        upperCaseLetters = 0;
      } else if (!isUpperCase(S[i]) && isNaN(S[i])) {
        singleTestedSubstring += S[i];
      }
    }
  }
}
const noDuplicates = testedSubstrings;
for (i = noDuplicates.length; i >= 0; i--) {
  for (j = noDuplicates.length; j >= 0; j--) {
    if (noDuplicates[i] == noDuplicates[j] && i != j) {
      noDuplicates.splice(j, 1);
    }
  }
}

const result = noDuplicates.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});
  return result;
}
process(input);
