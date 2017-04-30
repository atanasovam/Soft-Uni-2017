namespace _04.Sieve_of_Eratosthenes
{
    using System;

    public class SieveOfEratosthenes
    {
        public static void Main()
        {
            var num = int.Parse(Console.ReadLine());

            var numbers = new int[num];

            for (int i = 1; i <= num; i++)
            {
                numbers[i - 1] = i;
            }

            Console.WriteLine("2");

            for (int i = 3; i < numbers.Length; i += 2)
            {
                var currentNumber = Math.Sqrt(i);

                if ((i > 3 && i % 3 == 0) || (i % 2 == 0) || (i >= 25 && i % 5 == 0) || (i >= 49 && i % 7 == 0))
                {
                    continue;
                }
                if ((currentNumber != (int)currentNumber) || (i * i > 100))
                {
                    Console.WriteLine(i);
                }
            }
        }
    }
}