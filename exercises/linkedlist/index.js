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

}



module.exports = { Node, LinkedList };
