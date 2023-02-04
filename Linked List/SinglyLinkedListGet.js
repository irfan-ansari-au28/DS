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
    get(index){
       
       if(index<0 || index>=this.length){
           return null
       }
        let count = 0
        let current = this.head
        while(count !== index){
            
            current = current.next
            count++
            
        }
        return current
    }
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
