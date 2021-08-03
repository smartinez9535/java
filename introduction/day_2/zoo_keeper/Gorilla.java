public class Gorilla extends Mammal{
    // ATTRIBUTES & MEMBER VARIABLES

    // CONSTRUCTOR

    // GETTER(READ) AND SETTER(CREATE/UPDATE) METHODS
    public void throwSomething(){
        System.out.print("The gorilla has thrown something.\n");
        this.changeEnergy(-5);
    }

    public void eatBananas(){
        System.out.println("The gorilla ate bananas and is satisfied.\n");
        this.changeEnergy(10);
    }

    public void climb(){
        System.out.println("The gorilla climbed a tree.\n");
        this.changeEnergy(-10);
    }
}