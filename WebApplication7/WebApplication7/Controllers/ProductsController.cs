using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using WebApplication7.Models;
using WebApplication7.Services;
//using WebApplication7.Data;
using System.Diagnostics;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication7.Controllers
{

    [Route("api/")]
    [ApiController]
    public class ProductsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Products")]
        public async Task<ActionResult<Product>> AddProducts(Product newProduct)
        {
            _context.Products.Add(newProduct);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet]
        [Route("Products")]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var list = await _context.Products.ToListAsync();

            return list;
        }

        // ZROBIONE INNE

        //[HttpGet]
        //[Route("Products/id/")]
        //public async Task<ActionResult<List<Product>>> GetProducts(int? id)
        //{
        //    if (id == null)
        //    {
        //        return NotFound();
        //    }

        //    var item = await _context.Products.FindAsync(id);
        //    var list = new List<Product>();
        //    list.Add(item);

        //    return list;
        //}

        [HttpGet]
        [Route("Products/{id}")]
        public async Task<ActionResult<Product>> GetProducts(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var item = await _context.Products.FindAsync(id);

            return item;
        }


        [HttpDelete]
        [Route("Products/{id}")]
        public async Task<ActionResult<List<Product>>> DeleteProducts(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var item = await _context.Products.FindAsync(id);
            _context.Products.Remove(item);
            await _context.SaveChangesAsync();
            var list = await _context.Products.ToListAsync();

            return list;
        }

    }
}
