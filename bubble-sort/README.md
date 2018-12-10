## 冒泡排序

>原理：依次比较相邻的元素，若第一个比第二个值大，就交换两者位置，每一轮过后最大的元素冒泡至队列末尾，重复以上比较动作，直至没有元素需要比较。


#### 简要分析
`假设当前待排序的数组长度为n`

第一轮遍历：
从数组的第一个元素开始遍历，当前遍历队列的长度 `len` = `n-1`
第一轮过后，最大值冒泡至队列末尾（顶端）

第二轮遍历：
从数组的第一个元素开始遍历，因为第一轮遍历最大值冒泡至顶端了，那么这一轮遍历队列的长度`len` ＝ `n-2`

...
...
...

第n-1轮遍历：
此时`len` ＝ 1

#### javascript实现

```javascript
function bubbleSort (arr) {
    const len = arr.length
    let count = len - 1 // 初始化每轮比较个数

    // 存在未比较完的元素时，则进入循环一一比较
    while (count > 0) {

        for (let i = 0; i < count; i++) {
            let temp
            
            // 第一个元素大于大二个元素时交换二者位置
            // 确保大值始终在右边
            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }

        // 每一轮结束后，冒泡产生一个相对最大值
        // 所以下一轮遍历长度会减1
        count--
    }

    return arr
}

const arr = [2, 1, 5, 7, 3, 9, 0]

console.log(bubbleSort(arr)) // [0, 1, 2, 3, 5, 7, 9]
```

我上面实现的是每一轮计数按递减来算，也即是按照剩下需比较个数来初始化每一轮循环长度，当然也可以通过递增来进行，递增的话就理解为已冒泡至顶端的元素的个数。实现示例我也写一下：

```javascript
function bubbleSort(arr) {
    const len = arr.length
    const baseLen = len - 1 // 初始遍历长度
    let bubbleItemCount = 0

    // 若已冒泡的元素个数不等于baseLen，则还存在需比较的元素
    while (bubbleItemCount != baseLen) {
        for (let i = 0; i < baseLen - bubbleItemCount; i++) {
            let temp

            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }

        // 每一轮结束后已冒泡元素+1
        bubbleItemCount++
    }

    return arr
}
```

两个理解纬度，看个人习惯怎么去理解，不知道为啥，我更倾向后者，因为一开始我就理解为冒泡的元素总个数为数组长度减1的时候，说明数组排序已完成。总之，多想想是没错的 >_<
