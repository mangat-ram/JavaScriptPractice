//Dates

//How to get Dates in Js
let myDate = new Date()
//by Adding Dot to your Date you can Find Some Methods
//To manipulate your Dates
// console.log(myDate.toString());

//To define your Date 
let createdDate = new Date(2024,0,4,5,5)
// console.log(createdDate.toString());

//to Take TimeStamps
let timeStamp = Date.now()
console.log(timeStamp);
// Above code gives us a long string value which results in milliseconds
// we have to take that value and then compare it with
// Further milliseconds which we can get from date by using
// "ourTimeVariable.getTime()" which results in millisecs String