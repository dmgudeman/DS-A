

function isPalindrome(head: ListNode | null): boolean {

    let right = []
    let left = []

    while (head) {
        let temp = head.val
        right.push(temp)
        left.unshift(temp)
        head = head.next
    }
    return right.join('') === left.join('')

};

function isPalindrome(head: ListNode | null): boolean {

    function isPalindrome(head: ListNode | null): boolean {

        let arr = []
    
        while (head) {
            let temp = head.val
            arr.push(temp)
          
            head = head.next
        }
        
         let  i = 0
         let j = arr.length - 1
    
         while ( i <= j) {
             if ( arr[i] !== arr[j]) return false
             i++ 
             j--
         }
         return true
    
    
    };

}
