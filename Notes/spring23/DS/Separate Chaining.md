- Each table location stores a linked list of keys (and values) hashed to that location.
	- The hashing function really just selects which list to search or modify.
- This works well when the number of items stored in each list is small.
	- Other data structures such as Binary Search Trees may be used in place of the list, but these have greater overhead considering the number of items per bin.