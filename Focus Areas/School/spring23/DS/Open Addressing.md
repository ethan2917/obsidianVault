- When the chosen table location already stores a key, a different table location is sought in order to store the new value.
- Here there are three different variations to handle a collision during an `insert` operation:
	- [[Linear Probing]]
	- [[Quadratic Probing]]
	- [[Secondary Hashing]]
For each of these approaches, the `find` operation follows the same sequence of locations as the `insert` operation.
- The key value is determined to be absent from the table only when an empty location is found.
- When using open addressing to resolve collisions, the `erase` function must mark a location as "formerly occupied". 
	- If a location is instead marked empty, `find` may fail to return elements in the table.
	- Formerly occupied location may be reused, but only after the `find` operation has been run to completion.
[[Problems With Open Addressing]]

