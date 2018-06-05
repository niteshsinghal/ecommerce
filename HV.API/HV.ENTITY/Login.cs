using System;
using System.ComponentModel.DataAnnotations;

namespace HV.ENTITY
{
    public class Login
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
    public class LogggedInUser
    {
        public int PersonID { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmployeeName { get; set; }
        public string SSN { get; set; }
        public string GroupCode { get; set; }
        public string GroupDescription { get; set; }
    }
}
