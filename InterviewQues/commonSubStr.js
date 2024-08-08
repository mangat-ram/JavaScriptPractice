strs = ["flower", "flow", "flight"]

function commStr(arr){
  for(let i of arr){
    let spltWord = i.split('')
    console.log(spltWord);
  }
}

commStr(strs)