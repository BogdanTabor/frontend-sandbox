function getCount(str) {
  var vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  let newStr = str.split('');
  for (let i=0; i<newStr.length; i++) {
    if (vowels.includes(newStr[i])) {
      vowelsCount += 1;
    }
  }
  
  return vowelsCount;
}
