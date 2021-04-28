/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let foundIndex = -1

  for (let i = 0; i < nums.length; i++) {
    foundIndex = nums.indexOf(target - nums[i], i + 1)
    if (foundIndex !== -1) {
      return [i, foundIndex]
    }
  }
}

const nums = [2, 7, 11, 15]
const target = 9

// const nums = [3, 2, 4]
// const target = 6

console.log('twoSum: ', twoSum(nums, target))
