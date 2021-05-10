// 选择排序
const selectionSort = (arr: number[]) => {
  let minIndex: number;

  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

const s_aa = selectionSort([3, 2, 1, 4, 5, 9, 8]);

console.log("aa", s_aa);
