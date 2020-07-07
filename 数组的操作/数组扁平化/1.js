const arr = [1, [2,[3, 4]]];

function flatten(arr) {
  let result = []
  const digui = (result, arr) =>{
    for(let i = 0; i < arr.length; i++)
    {
      if (Array.isArray(arr[i]))
      {
        digui(result, arr[i])
      }
      else{
        result.push(arr[i])
      }
    }
    return result
  }
  return digui(result, arr)
}

console.log(flatten(arr)); // [1, 2, 3, 4]