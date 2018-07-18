using DotNetOpenAuth.GoogleOAuth2;
using Microsoft.AspNet.Membership.OpenAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp_Demo.App_Start
{
    public static class AuthConfig
    {
        public static void RegisterAuth()
        {
            GoogleOAuth2Client clientGoog = new GoogleOAuth2Client("629833650070-tskuhr8p7jeb1qi1h7f304hcep64oao2.apps.googleusercontent.com", "f7dDshcIn4bnI_7QrLgW21L0");
            IDictionary<string, string> extraData = new Dictionary<string, string>();
            OpenAuth.AuthenticationClients.Add("google", () => clientGoog, extraData);
        }
    }
}