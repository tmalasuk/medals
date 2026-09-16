using Microsoft.EntityFrameworkCore;
using MedalsApi.Models;

namespace MedalsApi.Data;

public class MedalsDbContext : DbContext
{
    public MedalsDbContext(DbContextOptions<MedalsDbContext> options) : base(options)
    {
    }

    public DbSet<Country> Countries => Set<Country>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Country>().HasData(
            new Country { Id = 1, Name = "United States", Gold = 2, Silver = 2, Bronze = 3 },
            new Country { Id = 2, Name = "China", Gold = 3, Silver = 1, Bronze = 0 },
            new Country { Id = 3, Name = "France", Gold = 0, Silver = 2, Bronze = 2 },
            new Country { Id = 4, Name = "Germany", Gold = 0, Silver = 2, Bronze = 2 },
            new Country { Id = 5, Name = "Spain", Gold = 1, Silver = 1, Bronze = 0 },
            new Country { Id = 6, Name = "United Kingdom", Gold = 0, Silver = 2, Bronze = 3 },
            new Country { Id = 7, Name = "Brazil", Gold = 3, Silver = 0, Bronze = 0 },
            new Country { Id = 8, Name = "Italy", Gold = 2, Silver = 2, Bronze = 2 },
            new Country { Id = 9, Name = "Switzerland", Gold = 1, Silver = 1, Bronze = 2 },
            new Country { Id = 10, Name = "Poland", Gold = 0, Silver = 2, Bronze = 1 },
            new Country { Id = 11, Name = "Sweden", Gold = 0, Silver = 3, Bronze = 1 },
            new Country { Id = 12, Name = "Ireland", Gold = 2, Silver = 1, Bronze = 0 },
            new Country { Id = 13, Name = "Scotland", Gold = 3, Silver = 0, Bronze = 2 }
        );
    }
}
