- Iterators move through the hash table in order of storage locations rather than the ordering imposed by an operator.
	- The increment operators must move to the next entry in the current linked list, or if the end of the current list is reached, to the first entry in the next non-empty list.
- The declaration is nested inside the `ds_hashset` declaration in order to avoid explicitly templating the iterator over the hash function type.
- The iterator must store:
	1. A pointer to the hash table it is associated with.
	2. The index of the current list in the hash table.
	3. An iterator referencing the current location in the current list.
- Because of the way classes are nested, the `iterator` class object must declare the `ds_hashset` class as a friend.
- [[Implementing begin() and end()]]
- [[Iterator Increment, Decrement, and Comparison Operators]]
- [[Hash Table Iterator Invalidation]]

