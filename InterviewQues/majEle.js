let nums = [2, 2, 1, 1, 1, 2, 2];

function majEl(nums){
  let elements = [];

  function getItemsArr(nums,item){
    return nums.filter(i => i === item)
  }

  for(let i=0;i<nums.length;i++){
    let arr = getItemsArr(nums,nums[i])
    if(nums[i] === arr[0]) continue;
    elements.push(arr)
  }

  return elements;
}

const res = majEl(nums)
console.log(res);
