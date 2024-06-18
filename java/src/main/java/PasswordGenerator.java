import java.util.Random;
import java.util.Scanner;

public class PasswordGenerator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the length of the password: ");
        int length = scanner.nextInt();
        System.out.print("Include lowercase letters? (y/n): ");
        boolean includeLowercase = scanner.next().equalsIgnoreCase("y");
        System.out.print("Include uppercase letters? (y/n): ");
        boolean includeUppercase = scanner.next().equalsIgnoreCase("y");
        System.out.print("Include numbers? (y/n): ");
        boolean includeNumbers = scanner.next().equalsIgnoreCase("y");
        System.out.print("Include special characters? (y/n): ");
        boolean includeSpecialChars = scanner.next().equalsIgnoreCase("y");

        String password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars);
        System.out.println("Generated password: " + password);
    }

    private static String generatePassword(int length, boolean includeLowercase, boolean includeUppercase, boolean includeNumbers, boolean includeSpecialChars) {
        String characters = "";
        if (includeLowercase) {
            characters += "abcdefghijklmnopqrstuvwxyz";
        }
        if (includeUppercase) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (includeNumbers) {
            characters += "0123456789";
        }
        if (includeSpecialChars) {
            characters += "!@#$%^&*()_+-={}[]|;':\",./<>?";
        }
        if (characters.isEmpty()) {
            return "Please select at least one character type.";
        }

        StringBuilder password = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < length; i++) {
            password.append(characters.charAt(random.nextInt(characters.length())));
        }
        return password.toString();
    }
}