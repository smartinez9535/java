public class Bat extends Mammal{
    // ATTRIBUTES & MEMBER VARIABLES

    // CONSTRUCTOR
    public Bat(){
        this.energyLevel = 300;
    }
    // GETTER(READ) AND SETTER(CREATE/UPDATE) METHODS
    public void fly(){
        System.out.print("Whooosh!.\n");
        this.changeEnergy(-50);
    }

    public void eatHumans(){
        System.out.println("SCREEECH!.\n");
        this.changeEnergy(25);
    }

    public void attackTown(){
        System.out.println("*Crackle*   *Smolder* .\n");
        this.changeEnergy(-100);
    }
}