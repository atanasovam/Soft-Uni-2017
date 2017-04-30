namespace _07.Max_Sequence_of_Increasing_Elements
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class MaxSequenceOfIncreasingElements
    {
        static void Main()
        {
            var input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            int currLength = 1;
            int length = 0;
            int index = 0;

            var output = new List<int>();

            for (int i = 0; i < input.Length - 1; i++)
            {
                if (input[i] + 1 == input[i + 1])
                {
                    currLength++;

                    if (i == input.Length - 2 && length < currLength)
                    {
                        length = currLength;
                        index = i + 2 - currLength;
                    }
                }

                else
                {
                    if (length < currLength)
                    {
                        length = currLength;
                        index = i + 1 - currLength;
                    }

                    currLength = 1;
                }
            }

            for (int i = index; i < index + length; i++)
            {
                output.Add(input[i]);
            }

            Console.WriteLine(string.Join(" ", output));
        }
    }
}