import java.util.Set;
import java.util.HashMap;
public class TrackList {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("Title 1", "Nancy Ninja");
        trackList.put("Title 2", "Sam Samurai");
        trackList.put("Title 3", "Walter Wizard");
        trackList.put("Title 4", "Walter Wizard");

        String name = trackList.get("Title 1");
        System.out.println("The title is: " + name);
        // get the keys by using the keySet method
        Set<String> keys = trackList.keySet();
        for(String key : keys) {
            System.out.println(key + " : " + trackList.get(key));
        }
    }
}

