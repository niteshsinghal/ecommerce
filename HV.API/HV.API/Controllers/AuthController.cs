
using HV.DAL.Interface;
using HV.ENTITY;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace HV.API.Controllers
{
    public class AuthController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IAuth _auth;
        private readonly IEmployee _person;
        public AuthController(IConfiguration configuration, IAuth auth, IEmployee person)
        {
            _configuration = configuration;
            _auth = auth;
            _person = person;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("token")]
        public IActionResult Post([FromBody]Login loginViewModel)
        {
            if (ModelState.IsValid)
            {
                loginViewModel.Username = "hradmin@hv6.com";
                loginViewModel.Password = "111";

                AuthenticatedUser authenticated = _auth.Authenticate(loginViewModel);
                if (authenticated == null) { return Unauthorized(); }

                LogggedInUser logggedInUser = _auth.Login(authenticated.DatabaseName, authenticated.UserName);
                var claims = new[]
                {
                    new Claim(ClaimTypes.GivenName,logggedInUser.EmployeeName),
                    new Claim(ClaimTypes.Name, logggedInUser.UserName),
                    new Claim(ClaimTypes.Role, logggedInUser.GroupCode),
                    new Claim("EmployerName", authenticated.EmployerName),
                    new Claim("DatabaseName", authenticated.DatabaseName),
                    new Claim("DomainName", authenticated.DomainName),
                };

                var token = new JwtSecurityToken
                (
                    issuer: _configuration["Issuer"],
                    audience: _configuration["Audience"],
                    claims: claims,
                    expires: DateTime.UtcNow.AddDays(60),
                    notBefore: DateTime.UtcNow,
                    signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["SigningKey"])), SecurityAlgorithms.HmacSha256)
                );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    personID = logggedInUser.PersonID,
                    firstName = logggedInUser.FirstName,
                    lastName = logggedInUser.FirstName,
                    roleCode = logggedInUser.GroupCode,
                    roleDescription = logggedInUser.GroupDescription,
                });
            }

            return BadRequest();
        }

    }
}