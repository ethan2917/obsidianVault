- The class is templated over both the key type and the hash function type.
```c++
template < class KeyType, class HashFunc >
class ds_hashset {...}
```
- We use [[Separate Chaining]] for collision resolution. Hence the main data structure inside the class is:
`std::vector< std::list<KeyType> > m_table;`
- We will use automatic resizing when our table is too full.
	- Resize is expensive so we will double the size of the underlying structure to ensure it is rarely needed.
- [[Our Hash Function]]
- 