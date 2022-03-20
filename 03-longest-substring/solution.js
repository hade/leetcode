/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function (s) {
  let foundStr = ''

  for (let i = 0; i < s.length; i++) {
    let curStr = ''
    for (let j = i; j < s.length; j++) {
      // console.log('curStr: ', curStr, 'chr: ', s[j])
      if (curStr.includes(s[j])) {
        // console.log(`curStr: ${curStr}, includes ${s[j]}`)
        break
      }
      curStr += s[j]
      // console.log('setting the curStr: ', curStr)
    }
    if (foundStr.length < curStr.length) {
      foundStr = curStr
    }
  }
  return foundStr.length
}

export default lengthOfLongestSubstring
