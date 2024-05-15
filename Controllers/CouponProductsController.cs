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
    public class CouponProductsController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public CouponProductsController(AplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/CouponProducts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CouponProduct>>> GetCouponProducts()
        {
          if (_context.CouponProducts == null)
          {
              return NotFound();
          }
            return await _context.CouponProducts.ToListAsync();
        }

        // GET: api/CouponProducts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CouponProduct>> GetCouponProduct(int id)
        {
          if (_context.CouponProducts == null)
          {
              return NotFound();
          }
            var couponProduct = await _context.CouponProducts.FindAsync(id);

            if (couponProduct == null)
            {
                return NotFound();
            }

            return couponProduct;
        }

        // PUT: api/CouponProducts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCouponProduct(int id, CouponProduct couponProduct)
        {
            if (id != couponProduct.CouponId)
            {
                return BadRequest();
            }

            _context.Entry(couponProduct).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CouponProductExists(id))
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

        // POST: api/CouponProducts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CouponProduct>> PostCouponProduct(CouponProduct couponProduct)
        {
          if (_context.CouponProducts == null)
          {
              return Problem("Entity set 'AplicationDbContext.CouponProducts'  is null.");
          }
            _context.CouponProducts.Add(couponProduct);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CouponProductExists(couponProduct.CouponId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCouponProduct", new { id = couponProduct.CouponId }, couponProduct);
        }

        // DELETE: api/CouponProducts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCouponProduct(int id)
        {
            if (_context.CouponProducts == null)
            {
                return NotFound();
            }
            var couponProduct = await _context.CouponProducts.FindAsync(id);
            if (couponProduct == null)
            {
                return NotFound();
            }

            _context.CouponProducts.Remove(couponProduct);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CouponProductExists(int id)
        {
            return (_context.CouponProducts?.Any(e => e.CouponId == id)).GetValueOrDefault();
        }
    }
}
