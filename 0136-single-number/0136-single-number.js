/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let compareList = {};
  let min = 0;

  for (let i = 0; i < nums.length; i++) {
    if (compareList[nums[i]]) {
      compareList[nums[i]] += 1;
    } else {
      compareList[nums[i]] = 1;
    }
  }

  const keys = Object.keys(compareList);
  keys.forEach((key) => {
    if (compareList[key] == 1) {
      min = key;
    }
  });

  return min;
};