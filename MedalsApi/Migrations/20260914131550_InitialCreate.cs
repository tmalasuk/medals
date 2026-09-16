using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MedalsApi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Gold = table.Column<int>(type: "INTEGER", nullable: false),
                    Silver = table.Column<int>(type: "INTEGER", nullable: false),
                    Bronze = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Countries",
                columns: new[] { "Id", "Bronze", "Gold", "Name", "Silver" },
                values: new object[,]
                {
                    { 1, 3, 2, "United States", 2 },
                    { 2, 0, 3, "China", 1 },
                    { 3, 2, 0, "France", 2 },
                    { 4, 2, 0, "Germany", 2 },
                    { 5, 0, 1, "Spain", 1 },
                    { 6, 3, 0, "United Kingdom", 2 },
                    { 7, 0, 3, "Brazil", 0 },
                    { 8, 2, 2, "Italy", 2 },
                    { 9, 2, 1, "Switzerland", 1 },
                    { 10, 1, 0, "Poland", 2 },
                    { 11, 1, 0, "Sweden", 3 },
                    { 12, 0, 2, "Ireland", 1 },
                    { 13, 2, 3, "Scotland", 0 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Countries");
        }
    }
}
