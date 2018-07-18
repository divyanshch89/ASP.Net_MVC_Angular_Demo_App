using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using Dapper;

namespace WebApp_Demo.Utilities
{
    public static class DataService
    {
        public static void StoreServerResponse(string response)
        {
            using (IDbConnection db = new SqlConnection(ConfigurationManager.ConnectionStrings["cn"].ConnectionString))
            {
                if (db.State == ConnectionState.Closed)
                    db.Open();
                db.Query("StoreServerResponse", new { ServerResponse = response }, commandType: CommandType.StoredProcedure);
            }
        }
    }
}