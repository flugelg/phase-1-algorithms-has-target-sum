function hasTargetSum(array, target) {
  for (let i = 0; i < array.length-1; i++) {
    const element = array[i];
    for (let j = i+1; j < array.length; j++) {
      const element2 = array[j];
      if(element + element2 == target) return true;
    }
  }
  return false;
}

/* 
  Runtime: O(n^2)
  Space: O(n)
*/

/* 
  iterate over the array 
  add the rest of the array to the current number
  if the 2 numbers add up to target return true
*/

/*
  I used 2 for loops. The first will keep adding to the second until it
  has tried all of the number in the array, then the first number will iterate
  to the next number. If it finds that these 2 numbers add up to the target
  it will return true. If the for loops complete it will return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1,6,12,43,7,9], 16));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1,6,12,43,7,9], 100));
}

module.exports = hasTargetSum;
