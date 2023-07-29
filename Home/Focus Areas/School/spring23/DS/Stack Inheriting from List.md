Re-implementation of the stack class as a derived class of std::list:
```c++
template <class T>
class stack : private std::list<T> {
public:
	stack() {}
	stack(stack<T> const& other) : std::list<T>(other) {}
	~stack() {}
	void push(T const& value) { this->push_back(value); }
	void pop() { this->pop_back(); }
	T const& top() onst { return this->back(); }
	int size() { return std::list<T>::size(); }
	bool empty() {return std::list<T>::empty(); }
};
```

- Private inheritance hides the `std::list<T>` member functions from the outside world. However they are still available to the `stack<T>` class.
> [!note] No member variables are defined - the only member variables needed are in the list class.
- When a stack member function uses the same name as the base class member function, the name of the base class followed by `::` must be provided to indicate that the base class member function is to be used.
- The copy constructor just uses the copy constructor of the base class.