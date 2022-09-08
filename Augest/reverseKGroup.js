

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
    let vhead = new ListNode();
    let p = head.next;
    let begin = vhead;
    let count = k;
    let sum = 1;
    while(p !=null){
        sum++;
        p = p.next;
    }//统计链表的长度
    p = head.next;
    while(sum>=k){
        while(head !=null && count>0){
            head.next = vhead.next
            vhead.next = head;
            head = p;
            if(p!=null) p = p.next;
            count--;
        }//每K个翻转一次
        while(vhead.next !=null){
            vhead = vhead.next;
        }
        sum -= k;
        count = k;
    }
    vhead.next = head;
    return begin.next;
};

