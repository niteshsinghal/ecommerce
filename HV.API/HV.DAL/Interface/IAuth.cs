using HV.ENTITY;
using System;
using System.Collections.Generic;
using System.Text;

namespace HV.DAL.Interface
{
    public interface IAuth
    {
        AuthenticatedUser Authenticate(Login model);
        LogggedInUser Login(string DatabaseName, string UserName);
    }
}
