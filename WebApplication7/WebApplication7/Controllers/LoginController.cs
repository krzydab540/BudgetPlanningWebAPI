using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using WebApplication7.Models;

namespace WebApplication7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IConfiguration _config;

        public LoginController(IConfiguration config)
        {
            _config = config;
        }
        //https://localhost:44351/api/Login?username=uzytkownik&pass=haslo
        //public IActionResult Login(string username, string pass)
        //{
        //    UserModel login = new UserModel();
        //    login.Username = username;
        //    login.Password = pass;
        //    IActionResult response = Unauthorized();

        //    var user = AuthenticateUser(login);

        //    if (user != null)
        //    {
        //        var tokenString = GenerateJSONWebToken(user);
        //        response = Ok(new { token = tokenString });
        //    }
        //    return response;
        //}



        public IActionResult Login(string encrypted)
        {
            var decodedTxt = Convert.FromBase64String(encrypted);
            string inputs = System.Text.Encoding.UTF8.GetString(decodedTxt);

            UserModel login = JsonConvert.DeserializeObject<UserModel>(inputs);

            IActionResult response = Unauthorized();

            var user = AuthenticateUser(login);

            if (user != null)
            {
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(new { token = tokenString });
            }
            return response;
        }

        private UserModel AuthenticateUser(UserModel login)
        {
            UserModel user = null;

            // to be replaced with LINQ query
            if (login.Username == "uzytkownik" && login.Password == "haslo")
            {
                user = new UserModel { Username = "uzytkownik", Email = "test@test.pl", Password = "haslo" };
            }

            return user;
        }

        private string GenerateJSONWebToken(UserModel userinfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, userinfo.Username),
                new Claim(JwtRegisteredClaimNames.Email, userinfo.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())

            };  

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

            var encodetoken = new JwtSecurityTokenHandler().WriteToken(token);
            return encodetoken;
        }

        //[Authorize]
        [HttpPost/*("Post")*/]
        public string Post()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            IList<Claim> claim = identity.Claims.ToList();
            var username = claim[0].Value;
            return "Welcome, " + username;
        }

        [Authorize]
        [HttpGet("GetValue")]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "jeden", "dwa", "trzy" };
        }

    }
}
