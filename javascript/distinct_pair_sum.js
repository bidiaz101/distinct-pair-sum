function distinctPairSum(arr, k) {
  // type your code here
  const sums = []

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] + arr[i + 1] === k && !sums.flat().includes(arr[i])) {
      sums.push([arr[i], arr[i + 1]])
    }
  }

  return sums
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log(distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 100));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([], 100));

  console.log("");

  console.log("Expecting: [[59, 41]]");
  console.log(distinctPairSum([59, 41], 100));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([59], 100));

  console.log("");

  console.log("Expecting: [[0, 0], [10, -10], [3, -3]]");
  console.log(distinctPairSum([1, 0, 0, 10, -10, 5, 4, 3, -3, -3], 0));  
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
