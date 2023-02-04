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
        pop(){
        if(!this.head) return undefined
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null;
        this.length--
        if(this.length === 0){
            this.head = null;
            this.tail = null
        }
        return current
        
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
    unshift(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
        // Fix pointing to itself -> else
        newNode.next = this.head
        this.head = newNode
        }
        this.length++
        return this
        
    }
}

let list = new SinglyLinkedList()
list.push("hi")
list.push('helloe')
list.push('3rd node')