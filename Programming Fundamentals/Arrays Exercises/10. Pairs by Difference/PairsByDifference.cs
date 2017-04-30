namespace _10.Pairs_by_Difference
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class PairsByDifference
    {
        public static void Main()
        {
            var numbers = Console.ReadLine().Split().Select(int.Parse).Distinct().ToArray();
            var difference = int.Parse(Console.ReadLine());

            var counter = 0;

            for (int f = 0; f < numbers.Length; f++)
            {
                var currentNum = numbers[f];

                for (int s = 0; s < numbers.Length; s++)
                {
                    var second = numbers[s];

                    if (currentNum + difference == second || currentNum - difference == second)
                    {
                        counter++;
                    }
                }
            }

            Console.WriteLine(counter / 2);
        }
    }
}
