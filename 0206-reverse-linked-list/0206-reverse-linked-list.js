/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next;  // Step 1: Store next node
        curr.next = prev;      // Step 2: Reverse the link
        prev = curr;           // Step 3: Move prev forward
        curr = next;           // Step 4: Move curr forward
    }

    return prev; 
};