let head = new SLNode(1);
let runner_temp = head;
for (let i of [7,3,5,2]) {
    let new_node = new SLNode(i);
    runner_temp.next = new_node;
    runner_temp = new_node;
}

console.log(head.val); //1
console.log(head.next.val); //7
console.log(head.next.next.next.val); // 5

/*------------------------------------------------------------------------ */


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
     */
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
     */
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
     */
    seedFromArr(vals) {
    for (val of vals){
        insertAtBack(val);
    }
    return this.head;
    }

/*----------------------------------Wednesday------------------------------------------- */

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
       */
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
       */
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

    /*---------------------------------------------------------------- */
}
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

let stack1 = new Stack;
console.log(stack1.isEmpty());
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.peek();
stack1.pop();
stack1.peek();
console.log(stack1.size());
stack1.print();

class SLNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

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
            return "The Stack is already empty";
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
        console.log(newString);
    }