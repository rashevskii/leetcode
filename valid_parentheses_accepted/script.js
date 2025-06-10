function isValid(s) {
  const dict = {
    "\\(\\)": true,
    "\\{\\}": true,
    "\\[\\]": true
  };
  const parentheses = Object.keys(dict);
  let copy_s = s.slice();

  while (copy_s.length && !Object.values(dict).every(el => el === false)) {
    for (let item of parentheses) {      
      const res = copy_s.match(item);
      if (res) {
        const idx = res.index;
        copy_s = copy_s.slice(0, idx) + copy_s.slice(idx + 2);
        dict[item] = true;
      } else {
        dict[item] = false;
      }
    }
  }
  return copy_s.length ? false : true;
};

const res =  isValid("({[]({{{[]}}})}))");
