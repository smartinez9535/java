
public class BankAccountTest {

	public static void main(String[] args) {
		System.out.println("Hello BankAccount");
		

		BankAccount account = new BankAccount(100.0, 200.0);
		//System.out.println(account);
		BankAccount.numberOfAccounts();
		BankAccount.totalMoney();
        System.out.println(account.getCheckingBalance());
        System.out.println(account.getSavingsBalance());

        account.deposit(100, "savings");
        account.deposit(200, "checking");
        //account.deposit(300, "sfsdfsdf");
        System.out.println(account.getCheckingBalance());
        System.out.println(account.getSavingsBalance());

        account.withdraw(200, "savings");
        account.withdraw(100, "checking");
        //account.deposit(300, "sfsdfsdf");
        System.out.println(account.getCheckingBalance());
        System.out.println(account.getSavingsBalance());

        System.out.println(account.totalInAccount());


	}

}
