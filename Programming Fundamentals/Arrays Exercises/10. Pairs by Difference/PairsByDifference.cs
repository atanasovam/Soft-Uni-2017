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

            var groups = new Dictionary<int, int>();
            var counter = 0;

            var minNum = 0;
            var maxNum = 0;

            for (int f = 0; f < length; f++)
            {
                for (int s = 0; s < length; s++)
                {

                }
            }

            Console.WriteLine(counter);

        }
    }
}
