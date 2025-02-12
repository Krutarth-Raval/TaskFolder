package TaskFolder.JAVA;

import java.util.*;

public class Task5 {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    System.out.println("Enter the first number: ");
    int num1 = scan.nextInt();
    System.out.println("Enter the second number: ");
    int num2 = scan.nextInt();
    System.out.println("The Product of Two Numbers is: " + (num1 * num2));
    scan.close();
  }
}
