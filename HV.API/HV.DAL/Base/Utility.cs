
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Security.Principal;
using System.Linq;
using System.Data.SqlClient;

public static class Utility
{
    public static string GetClientDatabase(this IIdentity identity)
    {
        var claim = ((ClaimsIdentity)identity).FindFirst("DatabaseName");
        return claim == null ? null : claim.Value;
    }
    /// <summary>
    /// Returns new database connection string
    /// </summary>
    public static string ConfigurnConnectionString(string _sample,string database)
    {
        string clientDBConnectionString = "";
        SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder(_sample);
        if (builder.DataSource.ToLower().Contains("database.windows.net"))
        {
            clientDBConnectionString = "Server=" + builder.DataSource + ";Initial catalog=" + database + ";Persist Security Info=False; User ID=" + builder.UserID + ";Password=" + builder.Password + ";MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=60;";
        }
        else
        {
            clientDBConnectionString = "Server=" + builder.DataSource + "; Initial catalog=" + database + "; User ID=" + builder.UserID + "; Password=" + builder.Password + "; MultipleActiveResultSets=False;";
        }
        return clientDBConnectionString;
    }
}
