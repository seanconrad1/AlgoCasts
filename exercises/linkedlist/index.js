// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document


class Node {
  constructor(data, next=null){
    this.data = data,
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  insertFirst(data){
    if (this.head) {
      this.head = new Node(data, this.head)
    }else {
      this.head = new Node(data)
    }
  }

  size(){
    let counter = 0
    let node = this.head

    while (node) {
      counter ++
      node = node.next
    }
    return counter
  }

  getFirst(){
    return this.head
  }

  getLast(){
    if (!this.head) {
      return null
    }

    let node = this.head
    while(node){
      if (!node.next) {
        return node
      }else {
        node = node.next
      }
    }
  }

  clear(){
    this.head = null
  }

  removeFirst(){
    if (!this.head) {
      return null
    }

    this.head = this.head.next
    return this.head
  }

  removeLast(){
    if (!this.head) {
      return
    }

    if(!this.head.next){
      this.head = null
      return
    }

    let prevNode = this.head
    let node = this.head.next
    while (node.next){
      prevNode = node
      node = node.next
    }
    prevNode.next = null
  }

  insertLast(data){
    const last = this.getLast()

    if(last){
      last.next = new Node(data)          // nodes exist
    }else {
      this.head = new Node(data)         // no nodes exists
    }

  }

  getAt(num){
    let counter = 0
    let node = this.head
    while (node) {
      if (num === counter) {
        return node
      }
      counter ++
      node = node.next
    }
    return null
  }

  removeAt(num){
    if (!this.head) {
      return
    }

    if(num === 0){
      this.head = this.head.next
      return
    }

    const previous = this.getAt(num - 1)
    if(!previous || !previous.next){
      return
    }
    previous.next = previous.next.next
  }

  insertAt(data, num){

    if (!this.getAt(num)) {
      this.insertLast(data)
    }else if(this.size() === 0){
      this.insertFirst(data)
    }else if (this.size() > 0 && num === 0) {
      this.insertFirst(data)
    }else if(this.size() > 0){
      const nextNode = this.getAt(num)
      const previousNode = this.getAt(num - 1)
      let newNode = new Node(data, nextNode)
      previousNode.next = newNode  
    }
  }

}

const list = new LinkedList();
list.insertFirst('a'); 2
list.insertFirst('b'); 1
list.insertFirst('c'); 0
list.insertAt('Hi', 12)
console.log(list);
// console.log(list.getAt(1)) // returns node with data 'Hi'


module.exports = { Node, LinkedList };
