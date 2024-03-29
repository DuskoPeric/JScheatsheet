function merge(arr1, arr2) {
  var merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  return merged;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([1, 3, 5, 10, 12, 2, 4, 6, 8]);
