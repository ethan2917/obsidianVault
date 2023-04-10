- It is a [[Template Class]].
- We call the default constructor to make an instance of that class. 
- Then the object can be used like it's a function.
## How does it do that?
```c++
template <class T> c
lass less { 
public: 
	bool operator() (const T& x, const T& y) const { return x < y; } 
};
```
