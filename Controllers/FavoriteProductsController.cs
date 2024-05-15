using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ecommerce_App.Data;
using Ecommerce_App.Models;

namespace Ecommerce_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteProductsController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public FavoriteProductsController(AplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/FavoriteProducts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FavoriteProduct>>> GetFavoriteProducts()
        {
          if (_context.FavoriteProducts == null)
          {
              return NotFound();
          }
            return await _context.FavoriteProducts.ToListAsync();
        }

        // GET: api/FavoriteProducts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FavoriteProduct>> GetFavoriteProduct(int id)
        {
          if (_context.FavoriteProducts == null)
          {
              return NotFound();
          }
            var favoriteProduct = await _context.FavoriteProducts.FindAsync(id);

            if (favoriteProduct == null)
            {
                return NotFound();
            }

            return favoriteProduct;
        }

        // PUT: api/FavoriteProducts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFavoriteProduct(int id, FavoriteProduct favoriteProduct)
        {
            if (id != favoriteProduct.FavoriteId)
            {
                return BadRequest();
            }

            _context.Entry(favoriteProduct).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FavoriteProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FavoriteProducts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FavoriteProduct>> PostFavoriteProduct(FavoriteProduct favoriteProduct)
        {
          if (_context.FavoriteProducts == null)
          {
              return Problem("Entity set 'AplicationDbContext.FavoriteProducts'  is null.");
          }
            _context.FavoriteProducts.Add(favoriteProduct);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFavoriteProduct", new { id = favoriteProduct.FavoriteId }, favoriteProduct);
        }

        // DELETE: api/FavoriteProducts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFavoriteProduct(int id)
        {
            if (_context.FavoriteProducts == null)
            {
                return NotFound();
            }
            var favoriteProduct = await _context.FavoriteProducts.FindAsync(id);
            if (favoriteProduct == null)
            {
                return NotFound();
            }

            _context.FavoriteProducts.Remove(favoriteProduct);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FavoriteProductExists(int id)
        {
            return (_context.FavoriteProducts?.Any(e => e.FavoriteId == id)).GetValueOrDefault();
        }
    }
}
