function twoSum(nums, target){
  for(let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i,j]
      }
    }
  }
}

const calling = twoSum([1,2,3,4],6);
console.log(calling);
