// 冒泡排序

var arr = [5,4,3,2,1]

for(var i = 0; i < arr.length; i++)
{
  for(var j = 0; j < arr.length -1-i; j++)
  {
    if (arr[j] > arr[j+1])
    {
      [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
    }
  }
}

console.log(arr)