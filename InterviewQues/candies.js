let candies = [4, 2, 1, 1, 2]
let extraCandies = 1;
const result = maxCandies(candies,extraCandies)
console.log(result);

function maxCandies(candies, extraCandies) {
  let maxCurrentCandies = Math.max(...candies);
  let resultsArr = [];

  for (let i = 0; i < candies.length; i++) {
    let totalCandies = candies[i] + extraCandies;
    let result = totalCandies >= maxCurrentCandies ? true : false;
    resultsArr.push(result);
  }

  return resultsArr;
}