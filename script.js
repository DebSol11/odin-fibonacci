function fibs(num) {
  let arr = [0,1];
  if (num === 1) {
    return (arr = [0]);
  } else if (num === 2) {
    return (arr = [0, 1]);
  } else if (num > 2) {
    for (let i = 2; i < num; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr
  }
}

console.log(fibs(8));

function fibsRec(n) {
  // Base case: return n if n is 0 or 1
  if (n === 0 || n === 1) {
    return n;
  }
  // Recursive case: sum of the two preceding numbers
  return fibsRec(n - 1) + fibsRec(n - 2);
}

