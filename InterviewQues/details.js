let details = ["7868190130M3522", "5303914400F3211", "9273338290F4010"];

function countAgesAbove60(details){
  let counts = [];
  for(let i=0; i<details.length; i++){
    let item = details[i];
    let number = item.slice(11,13);
    if(number > 60){
      counts.push(item)
    }
  }
  return counts.length;
}

let count = countAgesAbove60(details);
console.log(count);