function mergeAlterStrings(str1,str2){
  let strArr1 = str1.split("")
  let strArr2 = str2.split("")
  let maxLength = strArr1.length > strArr2.length ? strArr1.length : strArr2.length

  let str = "";
  let strArr = []
  for (let i = 0; i < maxLength; i++){
    // console.log(str1[i]);
    // console.log(str2[i]);
    strArr.push(str1[i])
    strArr.push(str2[i])
  }

  let result = strArr
  .filter(i => i !== undefined)
  .join("")

  return result
}

const result = mergeAlterStrings("abc","pqrs");
console.log(typeof result);
// mergeAlterStrings("abc", "pqr");
