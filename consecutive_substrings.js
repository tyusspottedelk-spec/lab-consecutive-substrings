function consecutiveSubstrings(string) {
  const substrings = [];

  for (let startIndex = 0; startIndex < string.length; startIndex++) {
    let currentSubstring = '';

    for (let endIndex = startIndex; endIndex < string.length; endIndex++) {
      currentSubstring += string[endIndex];
      substrings.push(currentSubstring);
    }
  }

  return substrings;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


