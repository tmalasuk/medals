using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MedalsApi.Data;
using MedalsApi.Models;

namespace MedalsApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CountryController : ControllerBase
{
    private readonly MedalsDbContext _context;

    public CountryController(MedalsDbContext context)
    {
        _context = context;
    }

    // GET: api/country
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Country>>> GetCountries()
    {
        return await _context.Countries.ToListAsync();
    }

    // GET: api/country/2
    [HttpGet("{id}")]
    public async Task<ActionResult<Country>> GetCountry(int id)
    {
        var country = await _context.Countries.FindAsync(id);

        if (country == null)
        {
            return NotFound();
        }

        return country;
    }

    // POST: api/country
    [HttpPost]
    public async Task<ActionResult<Country>> PostCountry(CountryCreateDto dto)
    {
        var country = new Country
        {
            Name = dto.Name,
            Gold = 0,
            Silver = 0,
            Bronze = 0
        };

        _context.Countries.Add(country);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetCountry), new { id = country.Id }, country);
    }

    // DELETE: api/country/2
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCountry(int id)
    {
        var country = await _context.Countries.FindAsync(id);
        if (country == null)
        {
            return NotFound();
        }

        _context.Countries.Remove(country);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
