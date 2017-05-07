namespace _01.Centuries_to_Minutes
{
    using System;

    public class Program
    {
        public static void Main()
        {
            int centuries = int.Parse(Console.ReadLine());

            int yrs = centuries * 100;
            int days = (int)(yrs * 365.2422);
            int hours = 24 * days;
            int minutes = 60 * hours;

            Console.WriteLine("{0} centuries = {1} years = {2} days = {3} hours = {4} minutes", centuries, yrs, days, hours, minutes);
        }
    }
}
