```c++
std::list<int>::iterator p = s.begin(); 
++p; 
p = s.erase(p);
```
- Erase invalidates iterators.
- Insert returns an iterator that points to the newly added element.
	- All iterators are invalidated if the inserted item is not inserted at the end.