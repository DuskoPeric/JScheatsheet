function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    const cv = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > cv; j--) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i--;
      } else {
        break;
      }
    }
  }
  return arr;
}

insertionSort([5, 1, 2, 68, 8, 3, 6, 4, -1]);
