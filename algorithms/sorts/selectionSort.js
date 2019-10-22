function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let min = i;
    for (j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

selectionSort([2, 1, 5, 68, 8, 3, 6, 4, -1]);
