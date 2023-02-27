var hasCycle = function (head) {
  // let hashTable = new Map()
  // while(head){
  //     if(hashTable.has(head)) return true
  //     hashTable.set(head)
  //     head = head.next
  // }
  // return false
  while (head) {
    if (head.visited) return true;
    head.visited = true;
    head = head.next;
  }
  return false;
};
