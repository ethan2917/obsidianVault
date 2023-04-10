- Constructors of function objects can be used to specify *internal* data for the functor that can then be used during computation of the function call operator.
```c++
class between_values { 
private: 
	float low, high; 
public: 
	between_values(float l, float h) : low(l), high(h) {} 
	bool operator() (float val) { return low <= val && val <= high; } 
};
```
- The range between low and high is specified when an instance of this class is created.
- We might have multiple different instances of the `between_values` functor, each with their own range.
- Later when the functor is used, the query value will be passed in as an argument.
- This can be used with STL `find_if`
```c++
if (std::find_if(my_data.begin(), my_data.end(), two_and_four) != my_data.end()) { 
	std::cout << "Found a value greater than 2 & less than 4!" << std::endl; 
}
```