using HV.DAL.Interface;
using HV.ENTITY;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System.Linq;

namespace HV.DAL.Repositories
{
    public class AuthRepository : IAuth
    {
        private readonly IConfiguration _configuration;
        public AuthRepository(IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
        {
            _configuration = configuration;
        }
        public AuthenticatedUser Authenticate(Login model)
        {
            var _contextMasterDB = new RepositoryBase(_configuration["ConnectionStrings:MasterDatabase"]);

            return _contextMasterDB.Query<AuthenticatedUser>("GET_AUTHENTICATED_USER", new { model.Username, model.Password }).FirstOrDefault();
        }
        public LogggedInUser Login(string _databaseName, string UserName)
        {
            var _contextClientDB = new RepositoryBase(Utility.ConfigurnConnectionString(_configuration["ConnectionStrings:MasterDatabase"],_databaseName));

            return _contextClientDB.Query<LogggedInUser>("GET_PERSON_BY_USERNAME", new { UserName }).FirstOrDefault();
        }

    }
}
