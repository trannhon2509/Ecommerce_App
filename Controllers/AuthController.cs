using Ecommerce_App.Data;
using Ecommerce_App.Models;
using Ecommerce_App.Models.API;
using Ecommerce_App.Models.Request;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Text.Json;
namespace Ecommerce_App.Controllers
{
    [Route("auth/")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AplicationDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public AuthController(AplicationDbContext context, IConfiguration configuration,  IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpPost("login")]
                public IActionResult Login(LoginModel model)
        {
            var user = AuthenticateUser(model.Username, model.Password);
            if (user == null)
            {
                return BadRequest(new AuthModel
                {
                    Role = "Unauthorized",
                    Token = null
                });
            }
            
            // Lưu thông tin đăng nhập vào session
            var authModel = new AuthModel
            {
                Role = user.Role.RoleName,
                Token = GenerateToken(user),
                Email = user.Email
            };

            // Lưu authModel vào session
            _httpContextAccessor.HttpContext.Session.SetString("AuthModel", JsonSerializer.Serialize(authModel));

            return Ok(authModel);
        }


        [HttpPost("register")]
        public IActionResult Register()
        {
            return Ok("Register");
        }

        private User AuthenticateUser(string username, string password)
        {
            return _context.Users.Include(u => u.Role).SingleOrDefault(u => u.Username == username && u.Password == password);
        }
        private string GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            // Retrieve SecretKey from configuration
            var secretKey = _configuration["SecretKey"];
            var key = Encoding.UTF8.GetBytes(secretKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Username),
                    // Các thông tin khác có thể được thêm vào đây
                }),
                Expires = DateTime.UtcNow.AddDays(7), // Token hết hạn sau 7 ngày
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
//test