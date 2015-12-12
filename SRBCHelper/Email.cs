using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using SendGrid;

namespace SRBCHelper
{
    public class EmailItem
    {
        public string SendTo { get; set; }
        public List<string> SendCc { get; set; }
        public string SendFrom { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
    }
    public static class Email
    {
        private static NetworkCredential GetNetworkCredential()
        {
            return new NetworkCredential("SRBCMail", "Password123!");
        }

        public static async Task CreateSignUpEmail(string from)
        {
            var email = new EmailItem
            {
                SendTo = "Contact@Savannahriverbrew.com",
                SendFrom = from,
                Subject = "Wants to be added to mailing list",
                Message =
                    string.Format("{0}, would like to be added to the Savannah River Brewing Company mailing list.", from)
            };
            await SendEmail(email);
        }


        private static async Task SendEmail(EmailItem item)
        {
            var meassage = new SendGridMessage();
            meassage.AddTo(item.SendTo);

            meassage.From = new MailAddress(item.SendFrom);
            meassage.Subject = item.Subject;
            meassage.Text = item.Message;
            var transportWeb = new Web(GetNetworkCredential());

             await transportWeb.DeliverAsync(meassage);


        }
    }
}
