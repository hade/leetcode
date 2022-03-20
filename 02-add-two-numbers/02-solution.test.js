import solution from './02-solution'

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const createList = (arr) => {
  const firstItem = arr.shift()
  let rList = new ListNode(parseInt(firstItem, 10))

  arr.forEach((item) => {
    rList = new ListNode(parseInt(item, 10), rList)
  })

  return rList
}

test('simple lists', () => {
  const list1 = createList([2, 4, 3].reverse())
  const list2 = createList([5, 6, 4].reverse())
  const expected = createList([7, 0, 8].reverse())

  expect(solution(list1, list2)).toEqual(expected)
})

test('zero lists', () => {
  const list1 = createList([0])
  const list2 = createList([0])
  const expected = createList([0])

  expect(solution(list1, list2)).toEqual(expected)
})

test('different size lists', () => {
  const list1 = createList([9, 9, 9, 9, 9, 9, 9].reverse())
  const list2 = createList([9, 9, 9, 9].reverse())
  const expected = createList([8, 9, 9, 9, 0, 0, 0, 1].reverse())

  expect(solution(list1, list2)).toEqual(expected)
})

test('one huge list and a small one', () => {
  const list1 = createList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1].reverse())
  const list2 = createList([5, 6, 4].reverse())
  const expected = createList([6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    .reverse())

  expect(solution(list1, list2)).toEqual(expected)
})
