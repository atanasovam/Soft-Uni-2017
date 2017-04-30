namespace _05.Compare_Char_Arrays
{
    using System;
    using System.Linq;

    public class CompareCharArrays
    {
        public static void Main()
        {
            var firstArr = Console.ReadLine().Trim().Split(' ').Select(char.Parse).ToArray();
            var secondArr = Console.ReadLine().Trim().Split(' ').Select(char.Parse).ToArray();

            string[] arrays = { new string(firstArr), new string(secondArr) };

            Array.Sort(arrays);

            Console.WriteLine(string.Join("\n", arrays));
        }
    }
}