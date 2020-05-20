using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace WebApplication7.Models
{
    public class Product
    {
        private int productID;
        private string productName;
        private double productPrice;
        [Key]
        public int ProductID { get => productID; set => productID = value; }
        [Required]
        public string ProductName { get => productName; set => productName = value; }
        [Required]
        public double ProductPrice { get => productPrice; set => productPrice = value; }
    }
}
