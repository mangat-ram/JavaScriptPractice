// Primitive DataTypes

//Seven Types: String,Number,Boolean,Null,Undefined,Symbol,BigInt
const score = 100;
const temp = 37.7;
const initialTemp = null;
const isTrue = false;
let userName; // undefined
const id = Symbol('345');
const moreId = Symbol('345');

console.log(id === moreId);
const bigNum = 5475676353573536725277n;


//Refrence Type or Non-Primitive
// Types: Objects,Arrays,Functions
const heroes = ["CaptainAmerica","IronMan","Hulk","Thor","Vision"];
const myDetails = {"name":"Mangat","age":23,"profession":"Software Dev"};
const myFunc = () => {console.log("Function Works")};
// myFunc();

// Types of Memory
// Stack(Primitive) Heap(Non-Primitive)
let myFavHero = "IronMan";
let oneMore = myFavHero;
console.log(myFavHero);
console.log(oneMore);

let userOne = {
  email:"user@gmail.com",
  upi:"number@paytm"
}

let userTwo = userOne;

userTwo.email = "new@google.com";
console.log(userOne.email);
console.log(userTwo.email);