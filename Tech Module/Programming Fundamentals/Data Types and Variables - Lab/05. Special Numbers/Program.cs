namespace _05.Special_Numbers
{
    using System;

    public class Program
    {
        public static void Main()
        {
            decimal n = decimal.Parse(Console.ReadLine());
            for (int i = 0; i <= n; i++)
            {
                decimal lastDigit = i % 10;
                decimal firstDigit = i / 10;
                decimal sum = lastDigit + firstDigit;
                if (sum == 5 || sum == 7 || sum == 11)
                {
                    Console.WriteLine(i + " -> True");
                }
                else
                {
                    Console.WriteLine(i + " -> False");
                }
            }
        }
    }
}
