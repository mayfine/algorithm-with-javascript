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