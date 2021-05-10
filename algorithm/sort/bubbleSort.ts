// 冒泡排序
const bubbleSort = (arr: number[]) => {
  if (!Array.isArray(arr)) return;
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

// 改进
// 每一轮结束之后 最后一个元素都是有序的

const bubbleSort_1 = (arr: number[]) => {
  if (!Array.isArray(arr)) return;
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

// 改进
// 当有序时 时间复杂度为 On

const bubbleSort_2 = (arr: number[]) => {
  if (!Array.isArray(arr)) return;
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) return arr;
  }

  return arr;
};

const aa = bubbleSort([3, 2, 1, 4, 5, 9, 8]);
const _aa = bubbleSort_1([3, 2, 1, 4, 5, 9, 8]);

console.log("aa", aa);
console.log("_aa", _aa);
