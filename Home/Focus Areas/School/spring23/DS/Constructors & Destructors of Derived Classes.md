- Constructors of a derived class call the base class constructor before anything else.
- The only thing you can control is which constructor is called and what the arguments will be. 
- The reverse is true for destructors.
	- Derived class destructors do their jobs first and then base class destructors are called at the end automatically.
> [!note] Destructors for classes which have derived classes must be marked virtual for this chain of calls to happen.

