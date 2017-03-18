namespace _08.Refactor_Volume_of_Pyramid
{
    using System;

    public class Program
    {
        public static void Main()
        {
            Console.Write("Length: ");
            double lenght = double.Parse(Console.ReadLine());

            Console.Write("Width: ");
            double widht = double.Parse(Console.ReadLine());

            Console.Write("Height: ");
            double height = double.Parse(Console.ReadLine());

            double volume = (lenght * height * widht) / 3;

            Console.WriteLine($"Pyramid Volume: {volume:f2}");
        }
    }
}
