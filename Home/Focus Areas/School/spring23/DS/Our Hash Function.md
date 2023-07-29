- Our hash function will be a [[Functor]].
- Here's an example of a good hash function for STL strings wrapped up inside of a class:
```c++
class hash_string_obj {
public:
	unsigned int operator() (std::string const& key) const {
		unsigned int hash = 1315423911;
		for (unsigned int i = 0; i < key.length(); i++)
			hash ^= ((hash << 5) + key[i] + (hash >> 2));
			return hash;
	}
};
```
The implementation is from [General Purpose Hash Function Algorithms](http://www.partow.net/programming/hashfunctions/).
- Once our new type containing the hash function is defined, we can create instances of our hash set object containing `std::string` by specifying the type `hash_string_obj` as the second template parameter to the declaration of a `ds_hashset`. `ds_hashet<std::string, hash_string_obj> my_hashset;`.
- Alternatively, we could use function pointers as a non-type template argument.