class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next - next;
  }

  // Services methods
  toString(cb) {
    return cb ? clearTimeout(this.value) : `${this.value}`;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add new Node to start of LinkedList
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  // Add new Node to the end of LinkedList
  append(value) {
    const newNode = new LinkedListNode(value);

    // Check if it's first element of LinkedList
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Set newNode to nextLink of currentTail
    // Set the newNode in current tail
    const currentTail = this.tail;
    currentTail.next = newNode;
    this.tail = newNode;
    return this;
  }

  // Find and delete node of LinkedList
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted
    if (this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  // Delete Node from tail LinkedList
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;

      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  //Find first Node by value from argument
  find({ value=undefined, cb=undefined }) {
    if (!this.head) {
      return null;
    }
    const currentNode = this.head;

    while (currentNode) {
      if (cb && cb(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
}