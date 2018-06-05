using HV.DAL.Interface;
using HV.ENTITY;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;

namespace HV.DAL.Repositories
{

    public class EmployeeRepository : RepositoryBase, IEmployee
    {
        public EmployeeRepository(IConfiguration configuration, IHttpContextAccessor httpContextAccessor) : base(configuration, httpContextAccessor) {}

        public List<Person> GetEmployees(int loggedInPersonId)
        {
            return Query<Person>("GET_EMPLOYEES", new { LoggedInPersonID = loggedInPersonId }).ToList();
        }
        public EmployeeCard GetEmployeeCard(int personID)
        {
            return Query<EmployeeCard>("GET_EMPLOYEE_CARD", new { PersonID = personID }).FirstOrDefault();
        }
        public EmployeePositionCard GetPositionCard(int personID)
        {
            return Query<EmployeePositionCard>("GET_POSITION_CARD", new { PersonID = personID }).FirstOrDefault();
        }
    }
}
