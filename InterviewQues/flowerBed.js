let flowerbed = [1, 0, 0, 0, 1]
let n = 1

function plantFlowers(flowerbed,n){
  const flowerBedLen = flowerbed.length;
  for(let i=0;i<flowerBedLen;i++){
    const leftNeighbour = i === 0 ? 0 : flowerbed[i-1]
    const rightNeighbour = i === flowerBedLen - 1 ? 0 : flowerbed[i+1]
    if(leftNeighbour + flowerbed[i] + rightNeighbour === 0){
      flowerbed[i] = 1;
      --n;
    }
  }

  return n <= 0
}

const res = plantFlowers(flowerbed,n);
console.log(res);
