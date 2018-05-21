using System;
using System.Web.Http;
using Northwind.Core.BusinessLayer.Contracts;
using NorthwindApi.Services;

namespace NorthwindApi.Controllers
{
   
    public partial class BaseApiController : ApiController
    {
        protected ISalesBusinessObject BusinessObject;

        public BaseApiController(IBusinessObjectService service)
        {
            BusinessObject = service.GetSalesBusinessObject();
        }

        protected override void Dispose(Boolean disposing)
        {
            if (BusinessObject != null)
            {
                BusinessObject.Release();
            }

            base.Dispose(disposing);
        }

    }
}
