## Notes:
> [!important] - There are two files for input, inventory and customer file 
> - `rental.exe inventory_file customer_file inventory_output_file customer_output_file`
> - Inventory input file form looks like:
>   ```
>   T1001 1 chainsaw 
>   T3056 6 Floor_Jack
>   T2001 2 Roto_Hammer_1/2_inch
>   ```
> - Customer file looks like:
>   ```
>   C0029 rent 0935 1 T1001 Emma_Watson 
>   C0010 rent 1000 1 T2001 Yogi_Berra
>   C0010 rent 1000 2 T3056 Yogi_Berra
>   ```
> - Do not use any other structures that have not been covered.
> - You may not use the STL sort functions for this assignment.
> - Use the STL list insert and erase functions to maintain all lists in the proper order as you process each rental or return event.
> - You may not use vectors, arrays, or the sort function for this assignment.

## Tasks:
### Inventory
- [x] If a line in the inventory file does not begin with a T or does not have a quantity greater than 0, print a message to std::cerr stating `Invalid inventory ID XXXX found in the inventory file.` where XXXX is the invalid ID. ✅ 2023-02-16
### Customer
- [x] If a line that does not begin with a C is found print a message to std::cerr stating `Invalid customer information found for ID XXXX in the customer file.` where XXXX is the invalid ID. ✅ 2023-02-16
### Main Functionality
- [x] Create customer class ✅ 2023-02-15
- [x] Create inventory class ✅ 2023-02-13
- [x] Maintain inventory list ✅ 2023-02-16
	- [x] Contains the items and the available quantity of that item. ✅ 2023-02-13
	- [x] As customers rent or return the item, the quantity should be adjusted. ✅ 2023-02-16
	- [x] The inventory list must be maintained in order by inventory ID. ✅ 2023-02-13
- [x] Maintain customer list ✅ 2023-02-17
	- [x] The customer list should only contain active customers. ✅ 2023-02-17
	- [x] The customer list must be maintained in order by customer ID. ✅ 2023-02-17
- [x] When a customer attempts to rent an item, check that sufficient quantity of the item available. ✅ 2023-02-16
	- [x] If there is a sufficient quantity, rent the requested number of items to the customer and adjust the inventory quantity. ✅ 2023-02-16
	- [x] If a customers request cannot be filled, do not rent any item to the customer and add the customer's request to a wait list with a timestamp ✅ 2023-02-16
- [x] If a customer requests an item whose ID is not in the inventory, print an std::cerr message stating `Customer CXXXX requested item TYYYY which is not in the inventory.`, CXXXX is the customer ID and TYYYY is the inventory ID. ✅ 2023-02-17
- [x] Keep track of what items each customer rents and any pending items for the customer. ✅ 2023-02-17
- [x] You will also need to keep track of which customers rent an item. ✅ 2023-02-15
- [x] When an item is returned adjust the inventory quantity. ✅ 2023-02-21
	- [x] Check the waitlist for any customers requesting the item. ✅ 2023-02-17
		- [x] Attempt to fill requests in timestamp order. ✅ 2023-02-17
		- [x] If a customer on the wait list has requested a quantity greater than the available amount, go on to the next customer. ✅ 2023-02-17
	- [x] If the customer returning the item has no other rental items or pending items, remove the customer from the customer list using the STL list’s erase function. ✅ 2023-02-17
	- [x] If a customer attempts to return an item that is not in the inventory, print an error message to std::cerr stating `Customer CXXXX attempted to return item TYYYY which is not in the inventory.` ✅ 2023-02-21
	- [x] If the customer returns an item that this same customer is waiting for, adjust the inventory and customer’s pending quantity. ✅ 2023-02-17
	- [x] If the customer tries to return an item she has not rented, print an error message to std::cerr stating `Customer CXXXX attempted to return item TYYYY which she/he did not rent.` ✅ 2023-02-17
	- [x] After reading the input files, produce a report of the current inventory and active customers. ✅ 2023-02-17
		- [x] For each inventory item, print the ID, the available quantity and the description as shown in the example below. ✅ 2023-02-16
		- [x] On the next line, if any customers are renting this item, print “Rental Customers” and then print the customer IDs and names of customers renting this item, followed by the quantity that they have rented in parenthesis as shown below. ✅ 2023-02-16
		- [x] If no one is currently renting the item, print nothing. ✅ 2023-02-16
		- [x] On the next line, print similar information for any customers waiting for this item including the quantity they have requested in parenthesis. ✅ 2023-02-16
	- [x] The customer report is similar. ✅ 2023-02-17
		- [x] It should contain a line for each active customer. An active customer is one with rented or pending items. The line should begin with customer ID, name, followed by lines containing rented items and quantities followed by lines for pending items and their quantities. ✅ 2023-02-17
- Inventory output:
```
T1001 0 available chainsaw 
Rental Customers: C0009 Snoop_Dawg (1) 
Pending Customers: C0001 Jane_Doe (1)
T2001 2 available Roto_Hammer_1/2_inch 
Rental Customers: C0008 John_Snow (1) C0010 Yogi_Berra (1)
T2002 2 available Roto_Hammer_1_inch
```
- Customer output:
```
C0001 Jane_Doe 
Pending: T1001 (1)
C0008 John_Snow 
Rentals: T2001 (1)
C0009 Snoop_Dawg
Rentals: T1001 (1)
```

## Extra Credit:
- [ ] Crash Course in C++ module: *Lesson 12: Debugger Use*
	- [x] Due before Friday, March 3rd ✅ 2023-02-28