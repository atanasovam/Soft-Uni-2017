namespace _01.Largest_Common_End
{
    using System;
    using System.Linq;

    public class LargestCommonEnd
    {
        public static void Main()
        {
            var firstArr = Console.ReadLine()
                .Trim()
                .Split()
                .ToArray();
            var secondArr = Console.ReadLine()
                .Trim()
                .Split()
                .ToArray();

            var lowerLenght = Math.Min(firstArr.Length, secondArr.Length);
            var largestLenght = Math.Max(firstArr.Length, secondArr.Length);

            var verification = false;
            var counter = 0;
            var secCounter = 0;

            if (firstArr[0] == secondArr[0])
            {
                for (int i = 0; i < lowerLenght; i++)
                {
                    verification = firstArr[i] == secondArr[i];
                    if (verification == true)
                    {
                        counter++;
                    }
                    else
                    {
                        break;
                    }
                }
            }

            Array.Reverse(firstArr);
            Array.Reverse(secondArr);

            if (firstArr[0] == secondArr[0])
            {
                for (int i = 0; i < lowerLenght; i++)
                {
                    verification = firstArr[i] == secondArr[i];
                    if (verification == true)
                    {
                        secCounter++;
                    }
                    else
                    {
                        break;
                    }
                }
            }
            var result = Math.Max(counter, secCounter);
            Console.WriteLine(result);
        }
    }
}