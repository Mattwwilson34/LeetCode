// Node class
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// linked list class
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

// Linked list builder function
const buildLinkedList = (stringOfNumbers) => {
  // Split string into array
  const stringArray = stringOfNumbers.split('');
  // Create array to hold parsed numbers
  const numbersArray = [];
  // parse each char into a number and push to numbersArray
  stringArray.forEach((char) => numbersArray.push(parseInt(char)));
  // Create node array
  let nodeArray = [];
  // Create nodes and push to array
  numbersArray.forEach((number) => nodeArray.push(new ListNode(number)));
  // Link nodes
  nodeArray.forEach((node, i) => {
    if (i === nodeArray.length - 1) return;
    node.next = nodeArray[i + 1];
  });
  // return linked list
  return new LinkedList(nodeArray[0]);
};

let list = buildLinkedList('12321');

const isPalindrome = (head) => {
  let node = head;
  let dataArray = [];

  // Push all node data values into array for easy reversal
  while (node) {
    dataArray.push(node.val);
    node = node.next;
  }

  let reversedDataArray = [];

  // Must push elements into new array due to reverse method mutating original
  dataArray.forEach((element) => reversedDataArray.push(element));

  // Reverse Array for palindrome comparison
  reversedDataArray = reversedDataArray.reverse();

  // Convert arrays to strings and compare
  return dataArray.join() === reversedDataArray.join();
};

isPalindrome(list.head);
console.log(
  `🔥 | file: index.js | line 62 | isPalindrome(list.head)`,
  isPalindrome(list.head)
);
