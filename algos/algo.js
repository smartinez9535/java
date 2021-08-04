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
}

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
