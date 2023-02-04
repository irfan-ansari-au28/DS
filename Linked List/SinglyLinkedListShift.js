 class Node {
     constructor(val){
         this.val = val
         this.next = null
     }
 }

class SinglyLinkedList  {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
        // Check if node is null
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
        
    }
    shift(){
        if(!this.head) return undefined
        let current = this.head
        this.head = current.next
        this.length--
        if(this.length ===0){
            this.tail = null
        }
        return current
        
        
    }
}

let list = new SinglyLinkedList()
list.push("hi")
list.push('helloe')
list.push('3rd node')