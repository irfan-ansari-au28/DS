class Stack {
  constructor(){
    this.item = []
  }

  push(ele){
    this.item.push(ele)
  }

  pop(){
    return this.item.pop()
  }

  peek(){
    return this.item[this.item.length - 1]
  }

  isEmpty(){
    return this.item.length === 0
  }

  print(){
    console.log(this.item.toString())
  }
}

const stack = new Stack()

console.log(stack.isEmpty())
stack.push(20)
stack.push(40)
stack.push(30)
stack.push(10)
stack.print()
console.log(stack.pop())
stack.print()
console.log(stack.isEmpty())
console.log(stack.peek())

// Big-O = O(1) - thats;
