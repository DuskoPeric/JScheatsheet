function bubbleSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let swap = false;
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }

  return arr;
}

bubbleSort([2, 1, 5, 8, 3, 6, -1]);
