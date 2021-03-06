lea
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const improved = function improved(nums, target) {
  let foundIndex = -1

  for (let i = 0; i < nums.length; i++) {
    foundIndex = nums.indexOf(target - nums[i], i + 1)
    if (foundIndex !== -1) {
      return [i, foundIndex]
    }
  }
  return undefined
}

export default improved
