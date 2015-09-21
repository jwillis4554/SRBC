using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SRBC.Controllers
{
    public class EmployeeAPIController : ApiController
    {
        // GET api/employeeapi
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/employeeapi/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/employeeapi
        public void Post([FromBody]string value)
        {
        }

        // PUT api/employeeapi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/employeeapi/5
        public void Delete(int id)
        {
        }
    }
}
