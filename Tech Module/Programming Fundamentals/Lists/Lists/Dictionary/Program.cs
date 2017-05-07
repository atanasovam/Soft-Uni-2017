namespace Dictionary
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var materials = new Dictionary<string, int>();
            var junk = new SortedDictionary<string, int>();
            var topNames = new Dictionary<string, string>();

            topNames["shards"] = "Shadowmourne";
            topNames["fragments"] = "Valanyr";
            topNames["motes"] = "Dragonwrath";

            var isReached = false;
            var stopper = 0;
            var output = "";

            while (!isReached)
            {
                var input = Console.ReadLine().ToLower().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);

                for (int i = 0; i < input.Length; i += 2)
                {
                    var currKey = input[i + 1];
                    var currValue = input[i];

                    if (materials.ContainsKey(currKey))
                    {
                        materials[currKey] += int.Parse(currValue);
                    }
                    else
                    {
                        materials[currKey] = int.Parse(currValue);
                    }

                    foreach (var item in materials)
                    {
                        if (item.Value >= 250)
                        {
                            if (topNames.ContainsKey(item.Key) && stopper == 0)
                            {
                                output = topNames[item.Key];

                                Console.WriteLine($"{output} obtained!");
                                stopper++;
                                materials[currKey] = 0;
                                isReached = true;
                                break;
                            }
                        }
                    }
                }
            }

            foreach (var item in materials)
            {
                if (item.Value >= 250)
                {
                    junk.Skip(item.Value);
                    continue;
                }
                junk.Add(item.Key, item.Value);
            }
            foreach (var item in junk)
            {
                Console.WriteLine($"{item.Key}: {item.Value}");
            }
        }
    }
}
