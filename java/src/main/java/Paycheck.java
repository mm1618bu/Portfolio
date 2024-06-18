import java.util.Scanner;

public class Paycheck {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your hourly wage: ");
        double hourlyWage = scanner.nextDouble();

        System.out.print("Enter the number of hours worked: ");
        double hoursWorked = scanner.nextDouble();

        // Calculate gross pay
        double grossPay = hourlyWage * hoursWorked;

        // Calculate taxes (assuming a flat tax rate of 20%)
        double taxRate = 0.20;
        double taxes = grossPay * taxRate;

        // Calculate net pay
        double netPay = grossPay - taxes;

        System.out.println("Gross Pay: $" + grossPay);
        System.out.println("Taxes: $" + taxes);
        System.out.println("Net Pay: $" + netPay);
    }
}