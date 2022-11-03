package fibonacci;

public class FibonacciUtils {
	int count = 0;
	int first = 0;
	int second = 1;
	int next;
	
	void fib(int n) {
		if (n > 0) {
			if (count <= 1) {
				next = count;
			} else {
				next = first + second;
				first = second;
				second = next;
			}
			System.out.print(next + " ");
			count++;
			fib(--n);
		}
	}
	
}
