```c++
class Account {
public:
	Account (int amount) : balance(amount) {}
	void deposit(int amount) {
	int tmp = balance; //A
	tmp += amount;     //B
	balance = tmp;     //C
	}
	void withdraw(int amount) {
	int tmp = balance; //D
	if (amount > tmp)
		cout << "Error: Insufficient Funds!" << endl;       //E1
	else 
		tmp -= amount; //E2
	balance = tmp;     //F
	}
private:
	int balance;
};
```
- We create a joint account that will be used by two people `Account account(100)`
- Now enumerate all of the possible interleavings of the sub-expressions (A-F) if the following two function calls were to happen concurrently. What are the different outcomes?
```c++
account.deposit(50);
account.withdraw(75);
```
