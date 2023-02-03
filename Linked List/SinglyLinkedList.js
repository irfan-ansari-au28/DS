class Node{
  constructor(val){
    this.val = val;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val){
    const newNode = new Node(val)
    // check if no head
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }
}

const list = new SinglyLinkedList()
list.push(1),
list.push(2)
list.push(3)
console.log(list)