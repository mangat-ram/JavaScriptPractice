let str = "Hello World";

function lenLastWord(str){
  let words = str.trim().split(" ")
  let lastWord = words[words.length-1]
  let wordsArrlen = lastWord.split('').length
  return wordsArrlen;
}

const res = lenLastWord(str)
console.log(res);
