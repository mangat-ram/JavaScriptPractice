let user = {
  userName:"Mayank",
  price:99,
  welcomeMessage:function(){
    console.log(`${this.userName}, welcome to Website`)
    console.log(this);
  }
}

// user.welcomeMessage()
// user.userName = "Sam";
// user.welcomeMessage()
// console.log(this);

//Node:when we are in Node environment this refers to empty Object{}.
//Browser:but when we are in context of browser this returns window Object{}.

// function chai(){
//   console.log(this);
// }
// chai();

// const chai = function (){
//   let user = "Sam Altman"; 
//   console.log(this.user)
// }

const chai = () => {
  let user = "Sam Altman";
  console.log(this)
}

// chai();

const addTwo = (num1,num2) => {
  return num1 + num2;
}

const retObject = (num1,num2) => ({userName:"Rajesh"})
// console.log(retObject(3,4));

//Immediately Invoked Function
;(function chaiAur(){
  console.log("Connected Chai");
})()

;(function aur() {
  console.log("Connected Two");
})()

