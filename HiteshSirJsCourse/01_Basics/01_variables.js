const accountId = 144553;
let accountEmail = "mram@outlook.com";
var accountPassword = "23452";
accountCity = "Bengaluru"; // We can do this way also,But considered as Very Bad Practice.

// accountId = 2;  // Not Allowed(we cannot reassign values to constant variables)
accountEmail = "nooby@gmail.com";
accountPassword = "0987";
accountCity = "Gurugram";
let accountState;

/*
1.Do Not Use Var in your javaScript Code instead use const and let.
2.Because variables declare with var are goto Global Scope.
*/

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

