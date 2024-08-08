function helloWorldCustom(str){
  let strLen = str.split('').length
  let helloStr = "HelloWorld"
  let helloArr = helloStr.split('')
  let strRet = [];
  for(let i=0; i < strLen; i++){
    strRet.push(helloArr[i])
  }

  let result = strRet.join('');
  return result;
}

const result = helloWorldCustom("abcdhfhfhfhfhfh")
console.log(result);