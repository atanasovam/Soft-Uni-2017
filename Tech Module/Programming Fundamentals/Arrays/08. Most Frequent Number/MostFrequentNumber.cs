namespace _08.Most_Frequent_Number
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class MostFrequentNumber
    {
        public static void Main()
        {
            var numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

            var output = new Dictionary<int, int>();

            var key = numbers[0];
            var value = 0;

            for (int i = 0; i < numbers.Length; i++)
            {
                var currentNumber = numbers[i];

                key = currentNumber;

                if (i > 0 && key != numbers[i - 1])
                {
                    value = 0;
                }
                output[key] = currentNumber;
                value++;
                output[key] = value;

            }

            var helper = new int[output.Count];
            var j = 0;

            foreach (KeyValuePair<int, int> kv in output)
            {
                helper[j] = kv.Value;
                j++;
            }

            var printKey = output.FirstOrDefault(x => x.Value == helper.Max()).Key;
            var printValue = output.FirstOrDefault(x => x.Value == helper.Max()).Value;

            Console.WriteLine(printKey);
        }
    }
}