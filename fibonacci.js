// The iterative approach
function fibs(num) {
  let arr = [0, 1];
  if (num === 1) {
    return (arr = [0]);
  } else if (num === 2) {
    return (arr = [0, 1]);
  } else if (num > 2) {
    for (let i = 2; i < num; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
  }
}

// The recursive approach
function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function displayFibonacciRecursive(n) {
  let resultArray = [];
  for (let i = 0; i < n; i++) {
    resultArray[i] = fibonacciRecursive(i);
  }
  console.log(resultArray);
}

export {fibs, fibonacciRecursive, displayFibonacciRecursive} ;
