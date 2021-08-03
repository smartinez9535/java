import java.util.ArrayList;
import java.util.Random;
public class PuzzleJava{
    Random random = new Random();
    public ArrayList<Integer> getTenRolls(){
        
        ArrayList<Integer> rolls = new ArrayList<Integer>();
        for(int i = 0; i < 10; i++){
            rolls.add(random.nextInt(20 - 1 + 1) + 1);
        }
        return rolls;
    }

    public String getRandomLetter(){
        char c = (char) ('a' + rnd.nextInt(26));
    }
}


