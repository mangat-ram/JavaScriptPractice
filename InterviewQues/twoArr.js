let arr = [1,2,3,4,5,6,7,5,3,3,4,5,4,3,4,5,6,5,4,4];

function twoArr(arr) {
  let uniArr = [];
  let dupArr = [];
  let elementCounts = {};

  for (let i = 0; i < arr.length; i++) {
    if (elementCounts[arr[i]] === undefined) {
      elementCounts[arr[i]] = 1;
    } else {
      elementCounts[arr[i]]++;
    }
  }

  for (let key in elementCounts) {
    if (elementCounts[key] > 1) {
      dupArr.push(parseInt(key));
    } else {
      uniArr.push(parseInt(key));
    }
  }

  return { dupArr, uniArr, elementCounts };
}


const value = twoArr(arr);
console.log(value);