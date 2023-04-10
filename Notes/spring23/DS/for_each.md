- Here's a small helper function to start with.
```c++
void float_print (float f){
	std::cout<<f<<std::endl;
}
```
- Now use `for_each` function to print our data.
```c++
std::for_each(my_data.begin(), my_data.end(), float_print);
```
- We can do the same thing without creating a helper function.
- We create an anonymous function using [[Lambda]].
```c++
std::for_each(my_data.begin(), my_data.end(), [](float f){ std::cout << f << std::end; });
```