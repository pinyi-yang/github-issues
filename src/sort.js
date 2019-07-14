var array = [{a:278}, {a:242}, {a:524}, {a:246}, {a:652}, {a:245}, {a:279}, {a:256}, {a:249},];

function mergeSort(array, attribute) {
  if (array.length === 0 ) {
    return [];
  }

  if (array.length === 1) {
    return array;
  }

  if (array.length === 2) {
    if (array[0][attribute] > array[1][attribute]) {
      return [array[1], array[0]]
    } else {
      return array;
    }
  }

  let pivotIndex = Math.round((array.length)/2 - 1);
  let pivot = array[pivotIndex];
  let left = [];
  let right = [];

  array.forEach((item, i) => {
    if (i !== pivotIndex) {

      item[attribute] < pivot[attribute]? left.push(item):right.push(item); 
    }
  })

  return [].concat(mergeSort(left, attribute), [pivot], mergeSort(right, attribute));
}

let result = mergeSort(array, 'a')
console.log(result);