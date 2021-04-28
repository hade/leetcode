/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  return nums.reduce((ret, num, index) => {
    const theRest = nums.slice(index + 1)
    const foundIndex = theRest.indexOf(target - num)

    if (foundIndex !== -1) {
      console.log('foundIndex: ', foundIndex)
      return ret.concat([index, foundIndex + index + 1])
    }
    return ret
  }, [])
}

// const nums = [2, 7, 11, 15]
// const target = 9

const nums = [3, 2, 4]
const target = 6

console.log('twoSum: ', twoSum(nums, target))
