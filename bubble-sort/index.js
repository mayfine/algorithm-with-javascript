// function bubbleSort (arr) {
//     const len = arr.length
//     let count = len - 1

//     while (count > 0) {
//         for (let i = 0; i < count; i++) {
//             let temp

//             if (arr[i] > arr[i + 1]) {
//                 temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//             }
//         }

//         count--
//     }

//     return arr
// }

function bubbleSort(arr) {
    const len = arr.length
    let bubbleItemcount = 0

    while (bubbleItemcount != len - 1) {
        for (let i = 0; i < len - 1 - bubbleItemcount; i++) {
            let temp

            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }

        bubbleItemcount++
    }

    return arr
}

const arr = [2, 1, 5, 7, 3, 9, 0]

console.log(bubbleSort(arr))

function bubbleSort(arr, shouldChange) {

    let length = arr.length,
        count = length - 1;

    while (count > 0) {
        for (let i = 0; i < count; i++) {
            let temp;

            // 支持自定义交换条件
            if (shouldChange.call(this, arr[i], arr[i + 1])) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }

        count--;
    }

    return arr;
}

let objArr = [
    { value: 2, index: 1 },
    { value: 5, index: 3 },
    { value: 3, index: 6 },
    { value: 9, index: 5 },
    { value: 3, index: 2 }
];

// 首先根据value进行排序，value相等则根据index进行排序
bubbleSort(objArr, (pre, next) => {
    return pre.value > next.value ||
          (pre.value === next.value && pre.index > next.index);
});
