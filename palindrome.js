function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  if (str === reversed) {
    return true;
  }

  return false;
}

console.log(palindrome('superman'));
