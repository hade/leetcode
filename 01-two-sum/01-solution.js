/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const firstRun = function firstRun(nums, target) {
  return nums.reduce((ret, num, index) => {
    const theRest = nums.slice(index + 1)
    const foundIndex = theRest.indexOf(target - num)

    if (foundIndex !== -1) {
      return ret.concat([index, foundIndex + index + 1])
    }
    return ret
  }, [])
}

export default firstRun
