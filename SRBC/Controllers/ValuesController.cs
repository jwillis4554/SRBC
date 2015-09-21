using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;
using SendGrid;

namespace SRBC.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
            SendGridMessage myMessage = new SendGridMessage();
            myMessage.AddTo("Contact@Savannahriverbrew.com");
            myMessage.AddCc("steve.ellison@savannahriverbrew.com");
            myMessage.AddCc("david.ellison@savannahriverbrew.com");
            myMessage.From = new MailAddress(value);
            myMessage.Subject = "Wants to be added to mailing list";
            myMessage.Text = value +", would like to be added the Savannah River Brewing Company mailing list.";
            var credentials = new NetworkCredential("SRBCMail", "Password123!");
            var transportWeb = new Web(credentials);
            //transportWeb.DeliverAsync(myMessage);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}