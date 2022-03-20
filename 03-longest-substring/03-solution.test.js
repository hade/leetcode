import lengthOfLongestSubstring from './solution'

test('abcabcbb => 3', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
})
test('bbbbb => b', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
})
test('pwwkew => wke', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
})

test('one space should return 1', () => {
  expect(lengthOfLongestSubstring(' ')).toEqual(1)
})

test('one char returns 1', () => {
  expect(lengthOfLongestSubstring('h')).toEqual(1)
})
