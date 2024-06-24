using System.Web;
using System.Web.Mvc;

namespace LvnK22CNT1lesson10DB
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
