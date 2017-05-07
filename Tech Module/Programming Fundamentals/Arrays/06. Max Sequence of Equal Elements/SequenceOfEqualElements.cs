namespace _06.Max_Sequence_of_Equal_Elements
{
    using System;
    using System.Linq;

    class SequenceOfEqualElements
    {
        static void Main()
        {
            var numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

            for (int i = 0; i < numbers.Length - 1; i++)
            {
                if ((i >= 1) && (numbers[i] != numbers[i + 1]))
                {
                    Array.Clear(numbers, i - 1, 1);
                }
            }
            Console.WriteLine(string.Join(" ", numbers));
        }
    }
}