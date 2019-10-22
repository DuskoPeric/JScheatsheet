function binarySearch(arr, n) {
  let start = 0;
  let finish = arr.length;
  let mid = Math.floor(arr.length / 2);

  while (n != mid) {
    if (n > arr[mid]) {
      start = mid;
      mid = Math.floor((start + finish) / 2);
    }
    if (n < arr[mid]) {
      finish = mid;
      mid = Math.floor((start + finish) / 2);
    }
  }

  if (n != arr[mid]) {
    mid = -1;
  }
  console.log(mid);
}

binarySearch([12, 13, 15, 34, 68, 90, 93], 14);
