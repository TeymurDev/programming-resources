function charMap(str) {
  const charmap = {};
  str = str.toLowerCase().replace(/[\W]/g, '');

  for (let char of str) {
    charmap[char] = ++charmap[char] || 1;
  }

  return charmap;
}

function anagrams(stringA, stringB) {
  const charmapA = charMap(stringA);
  const charmapB = charMap(stringB);

  if (Object.keys(charmapA).length !== Object.keys(charmapB).length) {
    return false;
  }

  for (let key in charmapA) {
    if (charmapA[key] !== charmapB[key]) {
      return false;
    }
  }

  return true;
}

console.log(anagrams('Hi there', 'Bye there'));
