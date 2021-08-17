/*let head = new SLNode(1);
let runner_temp = head;
for (let i of [7,3,5,2]) {
    let new_node = new SLNode(i);
    runner_temp.next = new_node;
    runner_temp = new_node;
}

/* console.log(head.val); //1
console.log(head.next.val); //7
console.log(head.next.next.next.val); // 5 */

/*------------------------------------------------------------------------ */

/*
class SLNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    
    //  TUESDAY -------------------------------------------------------------------//
    /**
     * Prints all the nodes in the list to the console.
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {SinglyLinkedList} This list.
     *//*
    printValues() {
        if(this.head == null){
            console.log("LIST EMPTY")
            return
        }
        // IF THE LIST IS NOT EMPTY
        var runner = this.head
        while(runner != null){
            console.log(runner.value)
            runner = runner.next
        }
    }
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     *//*
    insertAtBack(data){
        // 1. SLL IS EMPTY
        // 2. SLL IS NOT EMPTY
        if(this.head == null){
            this.head = new SLNode(data);
        }
        else{
            let runner = this.head;
            while(runner.next != null){
                runner = runner.next;

            }
            runner.next= new SLNode(data);
        }
        return this.head;
    }
    
    /**
     * Adds each item of the given array to the back of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     *//*
    seedFromArr(vals) {
    for (val of vals){
        insertAtBack(val);
    }
    return this.head;
    }

/*----------------------------------Wednesday------------------------------------------- */
/*
    insertAtFront(data) {
        //Start by creating a new node
        var newNode = new SLNode(data)

        newNode.next = this.head;

        this.head = newNode; 

    }

    /**
       * Removes the first node of this list.
       * - Time: (?).
       * - Space: (?).
       * @returns {any} The data from the removed node.
       *//*
    removeAtFront(){
        let temp = this.head; 
        this.head = this.head.next;
        temp.next = null; 
    }
    
      // EXTRA
    /**
       * Calculates the average of this list.
       * - Time: (?).
       * - Space: (?).
       * @returns {number|NaN} The average of the node's data.
       *//*
    average() {
        let sum = 0;
        let amount = 0;
        if(this.head == null){
            console.log("LIST EMPTY")
            return
        }
          // IF THE LIST IS NOT EMPTY
        var runner = this.head
        while(runner != null){
            sum += runner.value; 
            amount++;
            runner = runner.next;
        }
        return Math.floor(sum / amount); 
    }

    /*---------------------------------------------------------------------------------------- */
/*
    contains(val){
        if(this.head == null){
            console.log("LIST EMPTY")
            return false;
        }
          // IF THE LIST IS NOT EMPTY
        var runner = this.head
        while(runner != null){
            if(runner.value == val){
                return true;
            }
            runner = runner.next;
        }
        return false; 
    }

    removeBack(){
        if(this.head == null || this.head.next == null){
            return null;
        }
          // IF THE LIST IS NOT EMPTY
        let runner = this.head
        while(runner.next.next != null){
            runner = runner.next;
        }

        runner.next = null;
        return this.head;

    }

    containsRecursive(val, current = this.head){
        if(current == null){
            return false;
        }

        else if(current.value == val){
            return true;
        }
        
        return this.containsRecursive(val, current.next);
    }

    recursiveMax(runner = this.head, maxNode = this.head){
        if(runner == null){
            return maxNode.value;
        }
        else if(maxNode.value < runner.value){
            maxNode = runner;
        }

        return this.recursiveMax(runner.next, maxNode);
    }

    /*------------------------------------------------------------------ */
/*
    secondToLast(){
        if(this.head == null || this.head.next == null){
            return null;
        }
          // IF THE LIST IS NOT EMPTY
        let runner = this.head
        while(runner.next.next != null){
            runner = runner.next;
        }

        return runner.value;
    }

    removeVal(val){

        if(this.head == null) return false;

        if(this.head.value == val){
            let temp = this.head;
            this.head = this.next;
            temp.next = null;
            return true;
        }

        let runner = this.head
        while(runner.next.next != null){
            if(runner.next.value == val){
                temp = runner.next;
                runner.next = runner.next.next;
                temp.next = null;
                return true;
            }
            runner = runner.next;
        }

        if(runner.next.value == val){
            runner.next = null;
            return true;
        }

        return false;
    }

    kthToLast(k){
        let length = 0;

        if(this.head == null){
            return null;
        }
          // IF THE LIST IS NOT EMPTY
        let runner = this.head
        while(runner.next != null){
            length++;
            runner = runner.next;
        }

        if(length < k){
            return null;
        }

        else{
            runner = this.head;
            for( let i = 0; i < (length - k); i++){
                runner = runner.next;
            }
            return runner.value;
        }
    }
}
    /*---------------------------------------------------------------- */

/*
var newList = new SLL(); 

newList.insertAtFront(10);
newList.insertAtBack(15); 
newList.insertAtFront(5);
newList.removeAtFront();
newList.printValues(); 
console.log("\n\n");

var newList2 = new SLL(); 

newList2.insertAtFront(20);
newList2.insertAtFront(30);
newList2.insertAtFront(40);
newList2.printValues(); 
newList2.removeAtFront();
newList2.printValues(); 

var newList3 = new SLL(); 
newList3.insertAtFront(100);
newList3.insertAtFront(200);
newList3.insertAtFront(300);
console.log(newList3.average());
*/

/*--------------------------------------------------------- */

// MON
// LAST IN FIRST OUT
// LIFO - STACKS
class Stack {
    constructor(items = []) {
        this.items = items;
    }
    // Time: O(1)
    // Space: O(1)
    push(item) {
        this.items[this.items.length] = item;
    }

    // Time: O(1)
    // Space: O(1)
    // Returns undefined if empty
    pop() {
        this.items.splice(this.items.length - 1, 1);
    }

    // aka top, returns undefined if empty
    // Time: O(1)
    // Space: O(1)
    peek() {
        console.log(this.items[this.items.length - 1]);
    }

    // Time: O(1)
    // Space: O(1)
    isEmpty() {
        if(this.items.length == 0){
            return true;
        }

        else{
            return false;
        }
    }

    // Time: O(1)
    // Space: O(1)
    size() {
        return this.items.length;
    }

    // Time: O(n) linear
    // Space: O(n)
    print() {
        for(let i = 0; i <= this.items.length - 1; i++){
            console.log(this.items[i]);
        }
    }
}

/* let stack1 = new Stack;
console.log(stack1.isEmpty());
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.peek();
stack1.pop();
stack1.peek();
console.log(stack1.size());
stack1.print(); */

/* class SLNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
} */

class SLStack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    isEmpty() {
        if(this.head == null){
            return "The stack is empty";
        }
    }

    // Adds a new node with the given value in front of the head node.
    push(value) {
      //Start by creating a new node
        var newNode = new SLNode(value)

      // set the new node before the head of the linked list
      // and attach this new node at the front
        newNode.next = this.head;

      // the new node is at the front now
        this.head = newNode; 
        this.length++; 

    }

    // Removes the head node
    // return the popped value -- important!
    pop() {
        if(this.head == null){
            return null;
        }
            var temp = this.head.value;
            this.head = this.head.next;
            this.length--;
            return temp;
    }

    size() {
        return this.length;
    }

    peek() {
        if (this.length === 0) {
            return "out of bounds";
        }
        return this.head.value; 

    }

    printPretty() {
        if(this.head == null){
            console.log("LIST EMPTY")
            return
        }
        // IF THE LIST IS NOT EMPTY
        var runner = this.head
        let newString = "";
        while(runner != null){
            newString += runner.value + " ";
            runner = runner.next
        }
        //console.log(newString);
        return newString;
    }

    /*--------------------------------------------------------------- */

    /** Methods will be in the STACK class
   * Returns a new stack that is copy of the original stack.
   * Retain the original order. You may create extra temp 
   * SLStacks and/or SLQueues 
   * as storage.
   * - Time: O(?).
   * - Space: O(?).
   *@returns {SLStack} Copy of the original stack
   */
    copy() {
        if(this.head == null){
            return null;
        }

        let copyStack = new SLStack();
        let tempStack = new SLStack();

        //Iterate through original stack, save to temp stack
        let runner = this.head
        while(runner != null){

            tempStack.push(runner.value)
            runner = runner.next
        }

        //Iterate through temp stack, save to answer stack to undo reversal
        while(! tempStack.isEmpty()){

            copyStack.push(tempStack.pop())
        }
        return copyStack;
    }

/**
 * Rearranges the stack so that numbers > 0 are 
 * on the top and any negatives are on the bottom
 * Retain the order of the positives and negatives
 * Use extra stacks and/or queues as storage.
 * - Time: O(?).
 * - Space: O(?).
 *  @returns {any} The removed item.
 */ 
    partitionPositives() { //Horribly inefficient
        if(this.head == null){
            return null;
        }

        let partitionStack = new SLStack();
        let positiveStack = new SLStack;
        let negativeStack = new SLStack

        //Iterate through stack, put negatives into temp stack
        let runner = this.head
        while(runner != null){
            if(runner.value < 0){
                negativeStack.push(runner.value)
            }
            else{
                positiveStack.push(runner.value)
            }
            runner = runner.next
        }

        while(this.length != partitionStack.length)
            if(! negativeStack.isEmpty()){
                partitionStack.push(negativeStack.pop());
            }
            else{
                partitionStack.push(positiveStack.pop());
            }
        return partitionStack;
    }

}

/*------------------------------------------------------------------------------------ */
class SLNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value){
        // create new node with the value sent in
        let new_node = new SLNode(value);
        // increment size
        this.size++;
        // check if empty
        if(this.head == null){
            // if empty set head and tail to new node
            this.head = new_node;
            this.tail = new_node;
        }
        else{
            // not empty so just move tail
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }

    dequeue(){
        // check if queue is empty
        if(head == null) return null;
        // check to see if only 1 item in queue
        let answer = this.head;
        if(this.head.next == null){
            // set head and tail to null, queue now empty
            this.head = null;
            this.tail = null;
        }
        else{
            // move head to next
            this.head = this.head.next;
        }
        // reduce size
        this.size--;
        return answer;
    }

    isEmpty(){
        // if empty return true
        if(this.head == null){
            return true;
        }
        else return false;
    }

    getSize(){
        return this.size;
    }

    front(){
        return this.head();
    }

    printPretty() {
        if(this.head == null){
            console.log("LIST EMPTY")
            return
        }
        // IF THE LIST IS NOT EMPTY
        let runner = this.head
        let newString = "";
        while(runner != null){
            newString += runner.value + " ";
            runner = runner.next
        }
        //console.log(newString);
        return newString;
    }
    
    /*------------------------------------------------------------------- */

    // equals
    // Write a method on the Queue class that, given another queue, 
    // will return whether they are equal (same items in same order).
    // Do not use any extra array or objects as storage.
    // Do not alter (pop from or push into) either queue.
    equals(secondQ){
        if(this.getSize() != secondQ.getSize()) return false;

        /* let runner1 = this.head;
        let runner2 = secondQ.head;
        while(runner1 != null && runner2 != null){
            if(runner1.value != runner2.value) return false;

            else{
                runner1 = runner1.next;
                runner2 = runner2.next;
            }
        } */
        if(this.printPretty() == secondQ.printPretty())return true;

        else return false;
    }

    // isPalindrome
    // Write a method on the Queue class that returns whether or not the queue is a palindrome
    // Use only 1 stack as additional storage (no additional arrays / objects).
    isPalindrome(){
        if(this.head == null) return false;

        let storageStack = new SLStack();

        let runner = this.head;
        while(runner != null){
            storageStack.push(runner.value);
            runner = runner.next;
        }
        
        if(this.printPretty() == storageStack.printPretty()) return true;

        else return false;
    }

}
/*---------------------------------------------------------- */
class CircleQueue {
    constructor(capacity) {
        this.size = 0
        this.head_index = -1
        this.tail_index = -1

        // Items is an array with length == capacity 
        // where all values are undefined
        this.items = new Array(capacity)

        this.capacity = capacity

    }

    // Adds a new element into the list.
    enqueue(val) {
        // CIRCLE QUEUE IS FULL
        if(this.size == this.capacity){
            return "Queue is full, cannot enqueue"
        }

        // CIRCLE QUEUE IS EMPTY
        else if(this.head_index == -1){
            this.head_index = 0
            this.tail_index = 0
            this.items[this.head_index] = val
            this.size++
        }
        // CIRCLE QUEUE IS PARTIALLY FULL
        else{
            this.tail_index = (this.tail_index + 1) % this.capacity
            this.items[this.tail_index] = val
            this.size++
        }
        
    }

    dequeue() {
        // CIRCLE QUEUE IS EMPTY SO NOTHING TO DEQUEUE
        if(this.size == 0){
            return "Queue empty, cannot dequeue"
        }
        // CIRCLE QUEUE IS EMPTY AFTER DEQUEUE
        else if(this.size == 1){
            let removedVal = this.items[this.head_index]
            this.items[this.head_index] = null
            this.head_index = -1
            this.tail_index = -1
            this.size--

            return removedVal
        }
        // CIRCLE QUEUE IS PARTIALLY EMPTY AFTER DEQUEUE
        else{
            let removedVal = this.items[this.head_index]
            this.items[this.head_index] = null
            this.size--
            this.head_index = (this.head_index + 1) % this.capacity

            return removedVal
        }
    }

}

/* 
_____ _____ ____ _____ ___ _   _  ____ 
|_   _| ____/ ___|_   _|_ _| \ | |/ ___|
  | | |  _| \___ \ | |  | ||  \| | |  _ 
  | | | |___ ___) || |  | || |\  | |_| |
  |_| |_____|____/ |_| |___|_| \_|\____|
*/
/*
var s1 = new CircleQueue(3);
s1.enqueue(1)
s1.enqueue(2)
s1.enqueue(3)
s1.enqueue(4)

s1.dequeue()
s1.dequeue()
s1.dequeue()
s1.dequeue()
*/




/*
var s1 = new SLStack();
s1.push(1)
s1.push(2)
s1.push(3)
console.log(s1.printPretty())
console.log(s1.copy().printPretty())

var s2 = new SLStack()
s2.push(1)
s2.push(-2)
s2.push(-3)
s2.push(5)
s2.push(6)
console.log(s2.printPretty())
console.log(s2.partitionPositives().printPretty())
*/
/*
var q1 = new SLQueue()
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)

var q2 = new SLQueue()
q2.enqueue(3)
q2.enqueue(2)
q2.enqueue(1)
console.log(q1.equals(q2)) // SHOULD RETURN FALSE

var q1 = new SLQueue()
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)

var q2 = new SLQueue()
q2.enqueue(1)
q2.enqueue(2)
q2.enqueue(3)
console.log(q1.equals(q2)) // SHOULD RETURN TRUE

var q3 = new SLQueue()
q3.enqueue("a")
q3.enqueue("b")
q3.enqueue("c")
console.log(q3.isPalindrome()) // SHOULD RETURN FALSE

var q3 = new SLQueue()
q3.enqueue("a")
q3.enqueue("b")
q3.enqueue("a")
console.log(q3.isPalindrome()) // SHOULD RETURN TRUE
*/

/*---------------------------------------------------------------------- */

class BSTNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    search(val){
        // BST IS EMPTY
        if(this.root === null){
            return false;
        }
        // BST IS NOT EMPTY
        var runner = this.root

        while(runner != null){
            // IS THE VALUE WITHIN THE NODE
            if(runner.value === val){
                return true;
            }
            else if(runner.value > val){
                runner = runner.left;
            }
            else if(runner.value < val){
                runner = runner.right;
            }
        }
        return false;
    }

    insertIterative(val){
        // IS THE BST EMPTY?
        if(this.root === null){
            this.root = new BSTNode(val);
            return this.root;
        }

        
        //else if(this.search(val) === true){
        //    return "Value already in array, cannot insert."
        //}
        // HAVE YOUR RUNNER END UP IN THE CORRECT SPOT
        let runner = this.root

        while(runner != null){
            // CHECK TO SEE IF VALUE TO INSERT IS LESS THAN RUNNER VALUES
            if(runner.value > val){

                // CHECK TO SEE IF THERE IS AN EMPTY PLACE TO CREATE NEW NODE
                if(runner.left == null){
                    runner.left = new BSTNode(val);
                    return
                }

                // IF THERE IS AN EXISTING NODE, KEEP ON RUNNING THROUGH BST
                runner = runner.left;
            }

            // CHECK TO SEE IF VALUE TO INSERT IS GREATER THAN RUNNER VALUES
            else if(runner.value < val){

                if(runner.right == null){
                    runner.right = new BSTNode(val);
                    return
                }

                runner = runner.right;
            }
        }
        return false;
    }

    insertRecursive(val){
        let newNode = new BSTNode(val);
        if(this.root === null){
            this.root = newNode;
        }

        if(val < current.value){
            if(current.left == null){
                current.left = newNode;
                return newNode;
            }
            else{
                return this.insertRecursive(val, current.left);
            }
        }

        else if(val > current.value){
            if(current.right == null){
                current.right = newNode;
                return newNode;
            }
            else{
                return this.insertRecursive(val, current.right);
            }
        }
    }

        /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
        isEmpty() {
            if(this.root === null){
                return true;
            }

            else return false;
        }
    
        /**
         * Retrieves the smallest integer data from this tree.
         * - Time: O(?).
         * - Space: O(?).
         * @param {Node} current The node that is currently accessed from the tree as
         *    the tree is being traversed.
         * @returns {number} The smallest integer from this tree.
         */
        min() {

            if(this.root === null){
                return null;
            }

            let runner = this.root
            while(runner.left != null){
                runner = runner.left
            }

            return runner.value;
        }
    
        /**
         * Retrieves the smallest integer data from this tree.
         * - Time: O(?).
         * - Space: O(?).
         * @param {Node} current The node that is currently accessed from the tree as
         *    the tree is being traversed.
         * @returns {number} The smallest integer from this tree.
         */
        minRecursive(current = this.root) {
            if(current === null){
                return null;
            }
            // 1. BASE CASE - WHEN THE NODE GIVEN IS NULL
            if(current.left == null){
                return current.value;
            }
            // 2. FORWARD PROGRESS
            // 3. RECURSIVE CALL
            return this.minRecursive(current.left);
        }
    
        /**
         * Retrieves the largest integer data from this tree.
         * - Time: O(?).
         * - Space: O(?).
         * @param {Node} current The node that is currently accessed from the tree as
         *    the tree is being traversed.
         * @returns {number} The largest integer from this tree.
         */
        max() {
            if(this.root === null){
                return null;
            }

            let runner = this.root
            while(runner.right != null){
                runner = runner.right
            }

            return runner.value;
        }
    
        /**
         * Retrieves the largest integer data from this tree.
         * - Time: O(?).
         * - Space: O(?).
         * @param {Node} current The node that is currently accessed from the tree as
         *    the tree is being traversed.
         * @returns {number} The largest integer from this tree.
         */
        maxRecursive(current = this.root) {
            if(current === null){
                return null;
            }
            // 1. BASE CASE - WHEN THE NODE GIVEN IS NULL
            if(current.right == null){
                return current.value;
            }
            // 2. FORWARD PROGRESS
            // 3. RECURSIVE CALL
            return this.maxRecursive(current.right);
        }
}

var binary1 = new BST();

binary1.insertIterative(5);
binary1.insertIterative(2);
binary1.insertIterative(8);
binary1.insertIterative(10);
binary1.insertIterative(1);
console.log(binary1)
console.log(binary1.isEmpty())
console.log(binary1.min())
console.log(binary1.max())
console.log(binary1.minRecursive())
console.log(binary1.maxRecursive())