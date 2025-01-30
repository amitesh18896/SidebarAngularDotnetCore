using System.ComponentModel.DataAnnotations;

namespace JwtAuthAspNet7WebAPI.models
{
    public class Meters
    {
        [Key]
        public int Id { get; set; }
        public int Meterno { get; set; }
        public required string Address { get; set; }
        public required string State { get; set; }
        public bool Iactive { get; set; }
        public DateTime Createddate { get; set; }
        public required string Compuny { get; set; }
        public required string Owner { get; set; }
    }
}
