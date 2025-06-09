function longestCommonPrefix(strs) {
  if (strs.length === 1 && strs[0].length === 1) {
    return strs[0];
  }
  const firstWord = strs[0];
  let prefix = "";
  for (let i = 0; i < firstWord.length; i++) {
    const letter = firstWord[i];
    let equals = false;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] && letter === strs[j][i]) {
        equals = true;
      } else {
        equals = false;
        break;
      }
    }
    if (equals) {
      prefix += letter;
    } else {
      break;
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["dog","racecar","car"]));
