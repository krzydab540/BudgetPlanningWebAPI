using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR.Protocol;
using WebApplication7.Models;

namespace WebApplication7.Services
{
    public interface IProductServices
    {
        Product AddProducts(Product product);
        List<Product> GetProducts();
    }
}
