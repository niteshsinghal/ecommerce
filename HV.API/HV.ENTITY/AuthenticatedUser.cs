using System;
using System.Collections.Generic;
using System.Text;

namespace HV.ENTITY
{
    public class AuthenticatedUser
    {
        public string UserName { get; set; }
        public string EmployerName { get; set; }
        public string DatabaseName { get; set; }
        public string DomainName { get; set; }
        public string CompanyURL { get; set; }
    }
}
