import java.util.Arrays;
import java.util.ArrayList;

public class BankAccount {
	
	protected double checkingBalance;
	protected double savingsBalance;
	protected static int numOfAccounts;
    protected static double totalMoney;

	public BankAccount(double checkingBalance, double savingsBalance) {
		this.checkingBalance = checkingBalance;
		this.savingsBalance = savingsBalance;
		numOfAccounts++;
        totalMoney += checkingBalance + savingsBalance;
	}
	
	public static void totalMoney() {
        System.out.println("Total money in all accounts: " + totalMoney);
	}
	
	public static void numberOfAccounts() {
		System.out.println("Number of Accounts: " + numOfAccounts);
	}

    public void deposit(double amount, String account){
        if(account == "checking"){
            this.checkingBalance += amount;
            totalMoney += amount;
        }
        else if(account == "savings"){
            this.savingsBalance += amount;
            totalMoney += amount;
        }
        else{
            System.out.println("Input checking or savings.");
        }
    }

    public void withdraw(double amount, String account){
        if(account == "checking"){
            if(this.checkingBalance >= amount){
                this.checkingBalance -= amount;
                totalMoney -= amount;
            }
            else{
                System.out.println("Insufficient funds");
            }
        }
        else if(account == "savings"){
            if(this.savingsBalance >= amount){
                this.savingsBalance -= amount;
                totalMoney -= amount;
            }
            else{
                System.out.println("Insufficient funds");
            }
        }
        else{
            System.out.println("Input checking or savings.");
        }
    }

    public double totalInAccount(){
        System.out.println("\nTotal money in both checking and savings: ");
        return this.checkingBalance + this.savingsBalance;
    }

	public double getCheckingBalance() {
        System.out.println("\nChecking Balance: ");
		return checkingBalance;
	}

	public double getSavingsBalance() {
        System.out.println("\nSavings Balance: ");
		return savingsBalance;
	}
	
}
