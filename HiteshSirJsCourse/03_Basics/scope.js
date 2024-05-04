if(true){
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username = "Mangat";
  function two(){
    const website = "Youtube";
    console.log(username);
  }
  console.log(website);
  two()
}

// one()

if(true){
  const user = "Mangat";
  if(user === "Mangat"){
    const webkit = " Benzene";
    console.log(user+webkit);
  }
}
console.log(addOne(7));
function addOne(num){
  return num+1;
}

const addTwo = function(num){
  return num+2;
}
console.log(addTwo(7));

addTwo(7);

