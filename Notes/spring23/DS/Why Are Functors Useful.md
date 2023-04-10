- One example is the default 3rd argument for `std::sort`.
- First define a small helper function 
```C++
bool float_less(float x, float y){
	return x < y;
}
```
- We can use this function in `std::sort`
```c++
std::sort(my_data.begin(),my_data.end(),float_less);
```
- If we don't specify a third argument STL uses the less than argument by default
```C++
std::sort(my_data.begin(),my_data.end(),std::less<float>());
```
- [[What is std less]]
