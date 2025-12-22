export let testArray = [1, 4, 9, 22, 5, 3, 94, 33];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } 
    const middleIndex = Math.ceil(array.length / 2);
    const firstHalf = mergeSort(array.slice(0, middleIndex));
    console.log(firstHalf);
    const secondHalf = mergeSort(array.slice(middleIndex));
    console.log(secondHalf);
    return merge(firstHalf, secondHalf);
  }

  function merge(firstHalf, secondHalf) {
    let result = [];
    do {
      if (firstHalf[0] < secondHalf[0]) {
        result.push(firstHalf.shift());
      } else {
        result.push(secondHalf.shift());
      }
    } while (firstHalf.length && secondHalf.length);
    return result.concat(firstHalf,secondHalf);
  }

// export functions section
export { mergeSort };
