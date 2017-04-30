namespace _11.Equal_Sums
{
    using System;
    using System.Linq;

    public class EqualSums
    {
        public static void Main()
        {
            var sequence = Console.ReadLine().Split().Select(int.Parse).ToArray();

            var leftSum = 0;
            var rightSum = 0;

            if (sequence.Length == 1)
            {
                Console.WriteLine("0");
                return;
            }

            else if (sequence.Length > 1)
            {
                for (int i = 0; i < sequence.Length; i++)
                {
                    var currentPosition = i;

                    if (sequence.Length < 4)
                    {
                        Console.WriteLine("no");
                        break;
                    }

                    for (int l = 0; l < currentPosition; l++)
                    {
                        leftSum += sequence[l];
                    }

                    for (int r = currentPosition + 1; r < sequence.Length; r++)
                    {
                        rightSum += sequence[r];
                    }

                    if (leftSum == rightSum)
                    {
                        Console.WriteLine(currentPosition);
                        break;
                    }


                    leftSum = 0;
                    rightSum = 0;
                }
            }
            else
            {
                Console.WriteLine("no");
            }
        }
    }
}