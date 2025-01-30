using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JwtAuthAspNet7WebAPI.Core.DbContext;
using JwtAuthAspNet7WebAPI.models;
using Microsoft.AspNetCore.Authorization;
using JwtAuthAspNet7WebAPI.Core.OtherObjects;

namespace JwtAuthAspNet7WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MetersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MetersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Meters
      //  [Authorize(Roles = StaticUserRoles.ADMIN)]
        [HttpGet]
      
        public async Task<ActionResult<IEnumerable<Meters>>> GetMeters()
        {
          if (_context.Meters == null)
          {
              return NotFound();
          }
            return await _context.Meters.ToListAsync();
        }

        // GET: api/Meters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Meters>> GetMeters(int id)
        {
          if (_context.Meters == null)
          {
              return NotFound();
          }
            var meters = await _context.Meters.FindAsync(id);

            if (meters == null)
            {
                return NotFound();
            }

            return meters;
        }

        // PUT: api/Meters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMeters(int id, Meters meters)
        {
            if (id != meters.Id)
            {
                return BadRequest();
            }

            _context.Entry(meters).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MetersExists(id))
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

        // POST: api/Meters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Meters>> PostMeters(Meters meters)
        {
          if (_context.Meters == null)
          {
              return Problem("Entity set 'ApplicationDbContext.Meters'  is null.");
          }
            _context.Meters.Add(meters);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMeters", new { id = meters.Id }, meters);
        }

        // DELETE: api/Meters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMeters(int id)
        {
            if (_context.Meters == null)
            {
                return NotFound();
            }
            var meters = await _context.Meters.FindAsync(id);
            if (meters == null)
            {
                return NotFound();
            }

            _context.Meters.Remove(meters);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MetersExists(int id)
        {
            return (_context.Meters?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
