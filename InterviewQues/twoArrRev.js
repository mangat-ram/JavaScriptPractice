let arr = [1,3,4,3,3,5,7,1,2,5,4,3,9,8]

function uniArr(arr){
  let uniqueArr = [];
  let dupArr = [];
  let elementCounts = {};

  for(let i=0;i<arr.length;i++){
    if(elementCounts[arr[i]] === undefined){
      elementCounts[arr[i]] = 1
    }else{
      elementCounts[arr[i]]++
    }
  }

  for(let j in elementCounts){
    if(elementCounts[j] > 1){
      dupArr.push(j)
    }else{
      uniqueArr.push(j)
    }
  }

  let elementsWithMultipleCount = elementCounts.filter();

  return { uniqueArr, dupArr, elementCounts, elementsWithMultipleCount }
}

const value = uniArr(arr);
console.log(value);
