using System.Threading.Tasks;
using System.Web.Http;
using SRBCHelper;

namespace SRBC.Controllers
{
    public class SignUpController : ApiController
    {
        public async Task MailingListSignUp([FromBody]string value)
        {
             await Email.CreateSignUpEmail(value);
        }
    }
}
