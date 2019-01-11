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
    if (!this.head) {
      return null
    }
    let counter = 0
    let node = this.head
    while (node) {
      if (num === counter) {
        return node
      }
      counter ++
      node = node.next
    }
  }

  removeAt(num){
    if (!this.head) {
      return null
    }

    let counter = 0
    let node = this.head

    while (node) {
      if (counter === num) {
        node = null
      }else {
        node = node.next
      }
      counter ++
    }

  }

}

const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.insertFirst('d');
list.insertFirst('e');

list.removeAt(3);
console.log(list)
// list.removeAt(1);
// list.removeAt(2);

module.exports = { Node, LinkedList };
