let nums = [1,2,3,4];

function containsDupes(arr){
  let actualLength = arr.length;
  let afterLengthUni = [...new Set(arr)].length
  if (actualLength === afterLengthUni){
    return true;
  }else{
    return false;
  }
}

const res = containsDupes(nums)
console.log(res);
