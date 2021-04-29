import firstRun from './firstRun'
import improved from './improved'
import winner from './winner'

test('finds from the beginning', () => {
  const arr = [2, 7, 11, 15]
  const target = 9
  const expected = [0, 1]

  expect(firstRun(arr, target)).toStrictEqual(expected)
  expect(improved(arr, target)).toStrictEqual(expected)
  expect(winner(arr, target)).toStrictEqual(expected)
})

test('finds from the end', () => {
  const arr = [3, 2, 4]
  const target = 6
  const expected = [1, 2]

  expect(firstRun(arr, target)).toStrictEqual(expected)
  expect(improved(arr, target)).toStrictEqual(expected)
  expect(improved(arr, target)).toStrictEqual(expected)
})
