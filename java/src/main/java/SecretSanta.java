import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class SecretSanta {

    public static void main(String[] args) {
        // Start with a regular list, as before
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        // ... (add other names)

        // Create a Set to store unique names
        Set<String> uniqueNames = new HashSet<>(names);

        // Now, use uniqueNames for the pairing process
        List<String> pairs = new ArrayList<>();
        for (int i = 0; i < uniqueNames.size(); i += 2) {
            if (i + 1 < uniqueNames.size()) {
                pairs.add(uniqueNames.toArray(new String[0])[i] + " - " + uniqueNames.toArray(new String[0])[i + 1]);
            } else {
                pairs.add(uniqueNames.toArray(new String[0])[i] + " - Bye");
            }
        }

        // Print the Secret Santa pairings
        System.out.println("Secret Santa Pairings:");
        for (String pair : pairs) {
            System.out.println(pair);
        }
    }
}