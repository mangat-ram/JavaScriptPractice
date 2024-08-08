let num = 122233

function palindromeNumber(num){
  let strNum = num.toString()
  let strArr = strNum.split('')
  let reverseArr = strArr.reverse();
  let revStr = reverseArr.join('')
  const res = strNum === revStr ? true : false
  return res;
}

const res = palindromeNumber(num);
console.log(res);