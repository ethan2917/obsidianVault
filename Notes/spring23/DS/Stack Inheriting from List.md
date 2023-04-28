Re-implementation of the stack class as a derived class of std::list:
```c++
template <class T>
class stack : private std::list<T> {
public:
	stack() {}
	stack(stack<T>)
}
```