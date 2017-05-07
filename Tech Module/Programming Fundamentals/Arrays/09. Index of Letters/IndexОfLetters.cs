namespace _09.Index_of_Letters
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class IndexОfLtters
    {
        public static void Main()
        {
            var line = Console.ReadLine().ToList();

            var alphabet = new Dictionary<int, char>();
            var dict = new Dictionary<char, int>();
            
            for (int i = 0; i < 26; i++)
            {
                alphabet[i] = (char)('a' + i);
            }

            for (int i = 0; i < line.Count; i++)
            {
                var currentLetter = line[i];

                foreach (var kvp in alphabet)
                {
                    if (kvp.Value == currentLetter)
                    {
                        Console.WriteLine($"{currentLetter} -> {kvp.Key}");
                    }
                }
            }
        }
    }
}
