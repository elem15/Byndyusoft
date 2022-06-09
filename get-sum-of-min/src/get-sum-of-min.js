const getSumOfMin = (arr) => {

  let min1 = Infinity;
  let min2 = Infinity;

  for (const item of arr) {
    if ((/\d/).test(item)) {
      const num = parseFloat(item);
      if (num < min1) {
        const temp = min1;
        min1 = num;
        min2 = temp;
      } else if (num < min2) {
        min2 = num;
      }
    }
  }
  
  if (min1 === Infinity) {
    return null;
  }

  if (min2 === Infinity) {
    return min1;
  }

  return min1 + min2;

}

module.exports = getSumOfMin;