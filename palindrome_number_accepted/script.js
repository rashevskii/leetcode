function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  let integerPartOfNumber = x;
  const arrNumbers = [];
  while(integerPartOfNumber > 0) {
    arrNumbers.push(integerPartOfNumber % 10);
    integerPartOfNumber = Math.floor(integerPartOfNumber / 10);
  }
  if (arrNumbers[0] === 0) return false;
  const reversedArrNumbers = arrNumbers.reverse();
  const lenArrNumbers = reversedArrNumbers.length - 1;
  let reversedX = 0;
  for (let i = lenArrNumbers; i >= 0; i--) {
    let num = reversedArrNumbers[i];
    if (i !== 0) {
      for (let j = i; j > 0; j--) {
        num *= 10;
      }
    }
    reversedX += num;
  }
  return x === reversedX;
};

const res = isPalindrome(1221);
console.log((res));
