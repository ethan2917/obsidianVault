> [!info] Goals: fast O(1) **computation** and a **random, uniform distribution of keys throughout the table**.

- Using a function like `f(k) = abs(k)%N` satisfies the first requirement but may not satisfy the second.
- Another dangerous hash function on strings is to add or multiply the ascii values of each char because different permutations of the same string result in the same hash table location.
```c++
unsigned int hash(string const& k, unsigned int N){
	unsigned int value = 0;
	for (unsigned int i=0; i<k.size(); ++i){
		value += k[i] // Integer conversion is automatic
	}
	return value % N;
}
```
- This can be improved through multiplications that involve the position and value of the key.
```c++
unsigned int hash(string const& k, unsigned int N) { 
	unsigned int value = 0; 
	for (unsigned int i=0; i<k.size(); ++i) 
		value = value*8 + k[i]; //Integer conversion is automatic
	return value % N; 
}
```
- The 2nd method can be improved but is out of scope for this course.