public class Mammal{
    // ATTRIBUTES & MEMBER VARIABLES
    protected int energyLevel;

    // CONSTRUCTOR
    public Mammal(){
        this.energyLevel = 100;
    }
    // GETTER(READ) AND SETTER(CREATE/UPDATE) METHODS
    public int displayEnergy(){
        System.out.print(this.energyLevel + "\n");
        return this.energyLevel;
    }

    public void changeEnergy(int amount){
        this.energyLevel += amount;
        //System.out.println(this.energyLevel);
    }
}