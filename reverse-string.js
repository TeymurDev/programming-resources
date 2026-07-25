function reverse(str) {
  const strToArray = str.split('');

  strToArray.reverse();

  return strToArray.join('');
}

console.log(reverse('Superman'));
