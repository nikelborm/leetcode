// https://leetcode.com/problems/remove-linked-list-elements/description/

interface ListNode {
  val: number;
  next: ListNode | null;
}

function removeElements(
  initialHead: ListNode | null,
  numToExclude: number
): ListNode | null {
  let newHead = initialHead;
  while (newHead?.val === numToExclude) {
      newHead = newHead.next;
  }

  if (!newHead?.next) return newHead;

  let previous: ListNode = newHead;
  let current: ListNode = newHead.next;

  while (current.next) {
      if (current.val === numToExclude) previous.next = current.next;
      else previous = previous.next as ListNode;
      current = current.next;
  }

  if (current.val === numToExclude) {
      previous.next = null;
  }

  return newHead;
}
