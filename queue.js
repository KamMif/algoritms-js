import { LinkedList } from './linked-list';

export class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  // Add value to begin of queue
  enqueue(value) {
    this.linkedList.append(value);
  }

  // Remove first node and return it or return null 
  // if lined list is empty
  dequeue() {
    const removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  }

  // Just return begin value of LinkedList
  peek() {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  //Just check if queue is empty
  isEmpty() {
    return !this.linkedList.head;
  }

  // Service method
  toString(cb) {
    return this.linkedList.toString(cb);
  }
}