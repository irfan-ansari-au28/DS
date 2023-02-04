class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = null
    }
    push(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
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
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)