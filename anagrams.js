function cleanStr(str) {
  return str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

console.log(anagrams('Hi there', 'Bye there'));
