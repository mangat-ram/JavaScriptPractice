let strArr = ["aaa", "aa", "a"]
let k = 1;

function distinctArr(arr,k){
  let distincts = [];
  let elements = {}

  for(let i=0;i<arr.length;i++){
    if(elements[arr[i]] === undefined){
      elements[arr[i]] = 1
    }else{
      elements[arr[i]]++
    }
  }

  for(let j in elements){
    if(elements[j] === 1) distincts.push(j)
  }

  let resStr = distincts[k-1]

  return resStr

}

const result = distinctArr(strArr,k)
console.log(result);
