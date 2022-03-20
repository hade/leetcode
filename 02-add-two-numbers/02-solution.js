/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const nodeWalk = (node, sum, exp) => {
  if (!node.next) {
    return BigInt(sum) + BigInt(node.val) * BigInt(10) ** BigInt(exp)
  }
  const newSum = BigInt(sum) + BigInt(node.val) * BigInt(10) ** BigInt(exp)
  return nodeWalk(node.next, newSum, BigInt(exp) + BigInt(1))
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const addTwoNumbers = (l1, l2) => {
  const sum = (nodeWalk(l1, 0, 0) + nodeWalk(l2, 0, 0))
  const list = String(sum).split('')
  const firstItem = list.shift()

  let rList = new ListNode(parseInt(firstItem, 10))
  list.forEach((item) => {
    rList = new ListNode(parseInt(item, 10), rList)
  })

  return rList
}

export default addTwoNumbers
