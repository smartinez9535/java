public class CafeUtil{
    public void militaryHoursTest(){
        for(int i = 0; i < 24; i++){
            System.out.println(i);
        }
    }

    public void coffeeNotificationTest(){
        for(int i = 0; i < 24; i++){
            System.out.println(String.format("It's %d hours, do you need a coffee break?", i));
        }
    }

    public void specialsAlert(){
        for(int i = 6; i <= 15; i++){
            if(i % 3 == 0){
                System.out.println("Buy one get one free for the next 15 minutes!");
            }

            else{
                System.out.println("Stay tuned for deals announced througout the day.");
            }
        }
    }

    public int leadsAtDay10(){
        int sum = 0;
        for(int i = 0; i <= 10; i++){
            
            sum = sum + i;
        }
        return sum;
    }

    public void displayMenu(String[] menu){
        for(String item : menu){
            System.out.println(item);
        }
    }

    public double getOrderTotal(double[] items){
        double sum = 0;
        for(double item : items){
            sum += item;
        }
        return sum;
    }

    public double getHighestPrice(double[] priceIndex){
        double result = 0;
        for(double item : priceIndex){
            if(item > result){
                result = item;
            }
        }
        return result;
    }
}