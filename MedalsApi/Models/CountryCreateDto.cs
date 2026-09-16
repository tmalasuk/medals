using System.ComponentModel.DataAnnotations;

namespace MedalsApi.Models;

public class CountryCreateDto
{
    [Required]
    public string Name { get; set; } = string.Empty;
}
