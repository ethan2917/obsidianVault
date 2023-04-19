[[8.0 Templated Classes & Vector Implementation]]
- For Vec (and other classes with dynamically-allocated memory) to work correctly, each object must do its own dynamic memory allocation and deallocation.
- To prevent the creation and use of default versions of these operations, we must write our own:
	- [[Copy Constructor]]
	- [[Assignment operator]]
	- [[Destructor]]
