function romanToInt(s) {
  let sum = 0;
  let double = false;
  const dict = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  if (s.length < 1 || s.length > 15) {
    return sum;
  }
  const validSymbols = Object.keys(dict);
  const romanArr = s.split("");
  const len = romanArr.length;
  for (let symbol of romanArr) {
    if (!validSymbols.includes(symbol)) {
      return sum;
    }
  }
  for (let i = 0; i <= len; i++) {
    if (double) {
      double = false;
      continue;
    }
    if (i === len - 1) {
      sum += dict[romanArr[i]];
      break;
    }
    switch(romanArr[i]) {
      case "I":
        if (romanArr[i + 1] === "V" || romanArr[i + 1] === "X") {
          sum += (dict[romanArr[i + 1]] - 1);
          double = true;
        } else {
          sum += dict[romanArr[i]];
        }
        break;
      case "X":
        if (romanArr[i + 1] === "L" || romanArr[i + 1] === "C") {
          sum += (dict[romanArr[i + 1]] - 10);
          double = true;
        } else {
          sum += dict[romanArr[i]];
        }
        break;
      case "C":
        if (romanArr[i + 1] === "D" || romanArr[i + 1] === "M") {
          sum += (dict[romanArr[i + 1]] - 100);
          double = true;
        } else {
          sum += dict[romanArr[i]];
        }
        break;
      default:
        if (dict[romanArr[i]]) {
          sum += dict[romanArr[i]];
        }
    }

  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));
