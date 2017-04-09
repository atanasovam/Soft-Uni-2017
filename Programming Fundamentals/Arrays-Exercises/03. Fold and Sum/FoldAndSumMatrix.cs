namespace _03.Fold_and_Sum
{
    using System;
    using System.Linq;

    public class FoldAndSumMatrix
    {
        public static void Main()
        {
            var input = Console.ReadLine().Trim().Split().Select(int.Parse).ToArray();

            var k = input.Length / 4;
            var length = input.Length / 2;

            int[,] trimmedParts = new int[2, k];
            int[,] middle = new int[2, k];
            int[,] sum = new int[2, length / 2];

            //take the K elements form the beggining and the end
            for (int i = 0; i < k; i++)
            {
                trimmedParts[0, k - i - 1] = input[i];
                trimmedParts[1, i] = input[input.Length - 1 - i];
            }

            //take the middle elements
            for (int i = 0; i < k; i++)
            {
                middle[0, i] = input[i + k];
                middle[1, i] = input[i + k * 2];
            }

            //sum the elements from the previous 2 loops
            for (int r = 0; r <= 1; r++)
            {
                for (int i = 0; i < input.Length / 4; i++)
                {
                    sum[r, i] = trimmedParts[r, i] + middle[r, i];
                }
            }

            //print the result
            for (int r = 0; r <= 1; r++)
            {
                for (int i = 0; i < sum.Length / 2; i++)
                {
                    var currentNumber = sum[r, i];
                    Console.Write($"{currentNumber} ");
                }
            }
        }
    }
}