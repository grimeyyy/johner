package fibonacci;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		try {
			Scanner scanner = new Scanner(System.in);
			System.out.print("Enter number of terms: ");
			int num = scanner.nextInt();
			if (num > 0) {
				System.out.print("Fibonacci series is: ");
				FibonacciUtils f = new FibonacciUtils();
				f.fib(num);
			} else {
				System.out.println("Number must be > 0!");
			}
			scanner.close();
		} 
		catch (InputMismatchException e) {	
			System.out.println("Input is not a number!");
		}
		
	}

}
