function removeDupes(nums){
  const uni = nums.filter((i, ind) => nums.indexOf(i) === ind);
  return uni;
}

const res = removeDupes([1, 1, 2]);
console.log(res);
