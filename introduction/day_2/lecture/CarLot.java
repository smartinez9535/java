public class CarLot{
    public static void main(String[] args){
        // INSTANTIATE A CAR
        Car samers_car = new Car("Hyundai", "V4", 2014, 6000.00);
        Car empty_car = new Car();
        System.out.println(samers_car.getMake());
        samers_car.setMake("Honda");
        System.out.println(samers_car.getMake());

        System.out.println(samers_car.getPrice());
        //samers_car.depreciateValue();
        samers_car.setPrice(-5000.00);
        System.out.println(samers_car.getPrice());
    }
}