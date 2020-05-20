using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication7.Models;

namespace WebApplication7.Services
{
    public class ProductServices : IProductServices
    {
        private readonly List<Product> _prods;

        public ProductServices()
        {
            _prods = new List<Product>();
        }

        public Product AddProducts(Product products)
        {
            _prods.Add(products);
            return products;
            //_prods.Add(products.ProductName, products);
            //return products;
        }

        public List<Product> GetProducts()
        {
            return _prods;
        }
    }
}
