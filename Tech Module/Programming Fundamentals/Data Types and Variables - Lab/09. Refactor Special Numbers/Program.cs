namespace _09.Refactor_Special_Numbers
{
    using System;

    public class Program
    {
        public static void Main()
        {
            int num = int.Parse(Console.ReadLine());
            int total = 0;
            int someNum = 0;
            bool smth = false;
            for (int i = 1; i <= num; i++)
            {
                someNum = i;

                while (i > 0)
                {
                    total += i % 10;
                    i = i / 10;
                }

                smth = (total == 5) || (total == 7) || (total == 11);
                Console.WriteLine($"{someNum} -> {smth}");
                total = 0;
                i = someNum;
            }
        }
    }
}
