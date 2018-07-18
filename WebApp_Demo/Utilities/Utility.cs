using System;
using System.Web;

namespace WebApp_Demo.Utilities
{
    public static class Utility
    {
        public static string GetGreeting()
        {
            var result = "Good Evening";
            if (DateTime.Now.Hour < 12)
                result = "Good Morning";
            else if (12 < DateTime.Now.Hour && DateTime.Now.Hour < 16)
                result = "Good Afternoon";
            return result;
        }
        public static string GetBasePath(HttpContext ctx)
        {
            return ctx.Request.Url.Scheme + "://" + ctx.Request.Url.Authority + ctx.Request.ApplicationPath;
        }
    }
}