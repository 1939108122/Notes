// 快速排序
// let array = [7, 1, 6, 5, 3, 2, 4]
// let j = 0
// let len = array.length
// let end = array[len - 1]
// for(var i = 0; i< len; i++)
// {
//   if (array[i] <= end)
//   {
//     swap(array, i, j++)
//   }
// }

function swap (arr, i, j)
{
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// console.log(array)

let array = [7, 1, 6, 5, 3, 2, 4]

function sort(arr, start, end)
{
  let j = start;
  for(var i = start; i<= end; i++)
  {
    if (arr[i] <= arr[end])
    {
      swap(arr, i, j++)
    }
  }
  return j - 1
}


function quickSort(array, start, end) {
  if (end - start < 1) return array
  let index = sort(array, start, end)

  quickSort(array, start, index - 1)
  quickSort(array, index+1, end)

  return array
}

console.log(quickSort(array, 0, array.length - 1))



// 时间复杂度为 O(nlogn) 最差情况为当你想从小到大排序，数组却是从大到小排序，递归次数变成n，时间复杂度为O(n2)

// https://juejin.im/post/5d75f77e5188253e4b2f0d3d