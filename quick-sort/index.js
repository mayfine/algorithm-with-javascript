const arrlist = [2, 3, 1, 5, 6, 4]

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    // 默认选取第一个数作为基准数
    const baseNumber = arr[0]
    // 小于基准数的队列
    const leftList = []
    // 大于基准数的队列
    const rightList = []

    // 遍历生成队列数据分布
    arr.slice(1).forEach(item => {
        if (item < baseNumber) {
            leftList.push(item)
        } else {
            rightList.push(item)
        }
    })

    return [...quickSort(leftList), baseNumber, ...quickSort(rightList)]
}

console.log(quickSort(arrlist))