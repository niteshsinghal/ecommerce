
using HV.DAL.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;

namespace HV.API.Controllers
{
    [Authorize]
    public class EmployeeController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IEmployee _person;
        public EmployeeController(IConfiguration configuration, IEmployee person)
        {
            _configuration = configuration;
            _person = person;
        }

        [HttpGet]
        [Route("employees")]
        public IActionResult GetEmployees(int loggedInPersonId)
        {
            try
            {
                return Ok(_person.GetEmployees(loggedInPersonId));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        [Route("employeecard")]
        public IActionResult GetEmployeeCard(int personID)
        {
            try
            {
                return Ok(_person.GetEmployeeCard(personID));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        [Route("positioncard")]
        public IActionResult GetPositionCard(int personID)
        {
            try
            {
                return Ok(_person.GetPositionCard(personID));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}