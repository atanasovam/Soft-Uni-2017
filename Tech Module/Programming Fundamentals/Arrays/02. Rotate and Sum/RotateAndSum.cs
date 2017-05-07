namespace _02.Rotate_and_Sum
{
    using System;
    using System.Linq;

    public class RotateAndSum
    {
        public static void Main()
        {
            var arr = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToArray();
            var count = int.Parse(Console.ReadLine());

            var sum = new int[arr.Length];

            for (int r = 0; r < count; r++)
            {
                var lastDigit = arr[arr.Length - 1];

                for (int j = arr.Length - 1; j > 0; j--)
                {
                    arr[j] = arr[j - 1];
                }

                arr[0] = lastDigit;

                for (int j = 0; j < sum.Length; j++)
                {
                    sum[j] += arr[j];
                }
            }

            Console.WriteLine(string.Join(" ", sum));
        }
    }
}