using HV.ENTITY;
using System;
using System.Collections.Generic;
using System.Text;

namespace HV.DAL.Interface
{
    public interface IEmployee
    {
        List<Person> GetEmployees(int loggedInPersonId);
        EmployeeCard GetEmployeeCard(int personID);
        EmployeePositionCard GetPositionCard(int personID);
    }
}
