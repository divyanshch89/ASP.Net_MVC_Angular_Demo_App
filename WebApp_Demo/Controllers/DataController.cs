using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using Dapper;

namespace WebApp_Demo.Controllers
{
    public class DataController : ApiController
    {
        // GET: api/Data
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        // POST: api/Data
        [Authorize]
        public void Post([FromBody]DataModel data)
        {
            if (data != null)
            {
                using (IDbConnection db = new SqlConnection(ConfigurationManager.ConnectionStrings["cn"].ConnectionString))
                {
                    if (db.State == ConnectionState.Closed)
                        db.Open();
                    db.Query("StoreServerResponse", new { ServerResponse = data.time }, commandType: System.Data.CommandType.StoredProcedure);
                }

            }
        }

    }
    public class DataModel
    {
        public string time { get; set; }
    }
}
