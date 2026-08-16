function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }

  return maxChar;
}

console.log(maxChar('abctyibab'));
