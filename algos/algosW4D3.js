/** NEW CLASS!! MIN HEAP *****
 * 
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2)
 * - left child is located at: 2i
 * - right child is located at: 2i + 1
 */
class MinHeap {
    constructor() {
    /**
       * 0th index not used, so null is a placeholder. Not using 0th index makes
       * calculating the left and right children's index cleaner.
       * This also effectively makes our array start at index 1.
       */
        this.heap = [null];
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    getMin() {
        return this.heap[1];
    }

    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) {
        // 1. PUSH THE VALUE INTO THE ARRAY
        this.heap.push(num);
        if(this.heap.length - 1 <= 2){
            return;
        }

        let temp = this.heap.length - 1;
        // 2. CHECK FOR PARENT VALUES, IS IT GREATER OR SMALLER?
        while(num < this.heap[Math.floor(temp / 2)]){
            this.heap[temp] = this.heap[Math.floor(temp / 2)]
            this.heap[Math.floor(temp / 2)] = num;
            temp = Math.floor(temp / 2);
        }
        // 3. SWAP IF NECESSARY
    }

    extract(){
        // TO SAVE THE MIN NUMBER THAT WE WANT TO RETURN
        let extracted = this.heap[1];
        // SWAP THE FIRST AND LAST NUMBER IN ARR
        let temp = this.heap[this.heap.length - 1];
        this.heap[this.heap.length - 1] = extracted;
        this.heap[1] = temp;
        // POP THE LAST NUMBER
        this.heap.pop();

        // THE INDEX OF THE VALUE THAT WE ARE SWAPPING
        let index = 1;
        let leftIdx = index * 2
        let rightIdx = leftIdx + 1

        while(leftIdx < this.heap.length){
            // IS A SWAP NECESSARY
            if(this.heap[index] < this.heap[leftIdx] && this.heap[index] < this.heap[rightIdx]){
                break;
            }
            // WHICH CHILD VALUE DO WE SWAP WITH
            if(this.heap[leftIdx] < this.heap[rightIdx]){
                // LOGIC FOR THE ACTUAL SWAP IF NECESSARY
                let temp = this.heap[leftIdx];
                this.heap[leftIdx] = this.heap[index];
                this.heap[index] = temp;
                // RESETTING THE INDEXES FOR THE NEXT STEP OF SWAPS
                index = leftIdx;
                leftIdx = index * 2
                rightIdx = leftIdx + 1
            }

            else{
                // LOGIC FOR THE ACTUAL SWAP IF NECESSARY
                let temp = this.heap[rightIdx];
                this.heap[rightIdx] = this.heap[index];
                this.heap[index] = temp;
                // RESETTING THE INDEXES FOR THE NEXT STEP OF SWAPS
                index = rightIdx;
                leftIdx = index * 2
                rightIdx = leftIdx + 1
            }
        }
        // RETURN THE MIN NUMBER
        return extracted;
    }
}

let mh = new MinHeap();
mh.insert(2);
mh.insert(7);
mh.insert(9);
mh.insert(3);
mh.insert(1);
mh.insert(5);
console.log(mh);
console.log(mh.getMin());
console.log("Extracted: " + mh.extract())
console.log(mh);