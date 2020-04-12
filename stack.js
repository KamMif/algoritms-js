import { LinkedList } from './linked-list';

export class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  // Add value on top of stack
  push(value) {
    this.linkedList.prepend(value);
  }

  // Give element from top of stack
  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  // Check if element enabled on top of stack
  peek() {
    if (this.isEmpty()) {
      return null
    }

    return this.linkedList.head.value;
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  // Service method
  toArray() {
    return this.linkedList
      .toArray()
      .map(linkedListNode => linkedListNode.value)
  }

  // Service method
  toString(cb) {
    return this.linkedList.toString(cb);
  }
}