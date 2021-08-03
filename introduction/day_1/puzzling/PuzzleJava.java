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
        String[] letterArray = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};
        int i = random.nextInt(25 - 0 + 1) + 0;
        return letterArray[i];
    }

    public String generatePassword(){
        String result = "";
        for(int i = 0; i < 8; i++){
            result += getRandomLetter();
        }
        return result;
    }

    public ArrayList<String> getNewPasswordSet(int length){
        ArrayList<String> passwordSet = new ArrayList<String>();
        for(int i = 0; i < length; i++){
            passwordSet.add(generatePassword());
        }
        return passwordSet;
    }
}


