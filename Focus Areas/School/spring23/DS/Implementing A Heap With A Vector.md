- The tree is never explicitly constructed.
	- Instead, the heap is stored as a vector, and the child and parent "pointers" can be implicitly calculated.
- Number the nodes in the tree starting with 0 first by level (top to bottom) and then scanning across each row (left to right).
	- These are vector indices.
- As a result, for each subscript, *i*,
	- The parent, if it exists is at location [(i-1)/2].
	- The left child, is at location 2i+1.
	- The right child, is at location 2i+2.
- For a [[Binary Heap]] containing *n* values, the last leaf is at location n-1 in the vector and the first node with less than two children is at location (n-1)/2.
- The STL [[Priority Queue]] is implemented as a binary heap.
- [[Building A Heap]]