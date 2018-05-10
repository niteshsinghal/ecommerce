using System;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Northwind.Core.BusinessLayer.Contracts;
using Northwind.Core.EntityLayer;
using NorthwindApi.Helpers;
using NorthwindApi.Responses;
using NorthwindApi.Services;
using NorthwindApi.ViewModels;

namespace NorthwindApi.Controllers
{
    public class ProductsController : ApiController
    {
        protected ISalesBusinessObject BusinessObject;
        readonly DapperHelper _dapper = new DapperHelper();

        public ProductsController(IBusinessObjectService service)
        {
            BusinessObject = service.GetSalesBusinessObject();
        }

        //// GET: api/Product
        //[HttpGet]
        //[Route("Products")]
        //public async Task<HttpResponseMessage> GetProducts()
        //{

        //    var response = new ComposedModelResponse<ProductListViewModel>() as IComposedModelResponse<ProductListViewModel>;

        //    try
        //    {
        //        response.Model = await Task.Run(() =>
        //        {
        //            return _dapper.Query<ProductListViewModel>("ProductsList").ToList();
        //        });
        //        response.Message = String.Format("Total of records: {0}.", response.Model.Count());
        //    }
        //    catch (Exception ex)
        //    {
        //        ExceptionHelper.Publish(ex);

        //        response.Error = true;
        //        response.ErrorMessage = ex.Message;
        //    }

        //    return response.ToHttpResponse(Request);
        //}


        // GET: api/Product
        [HttpGet]
        [Route("Product")]
        public async Task<HttpResponseMessage> GetProducts(String productName, Int32? supplierID, Int32? categoryID)
        {
            var response = new ComposedModelResponse<ProductDetailViewModel>() as IComposedModelResponse<ProductDetailViewModel>;

            try
            {
                response.Model = await Task.Run(() =>
                {
                    return BusinessObject.GetProductsDetails(supplierID, categoryID, productName).Select(item => new ProductDetailViewModel(item)).ToList();
                });
                response.Message = String.Format("Total of records: {0}.", response.Model.Count());
            }
            catch (Exception ex)
            {
                ExceptionHelper.Publish(ex);

                response.Error = true;
                response.ErrorMessage = ex.Message;
            }

            return response.ToHttpResponse(Request);
        }

        // GET: api/Product/5
        [HttpGet]
        [Route("Product")]
        public async Task<HttpResponseMessage> GetProduct(Int32 id)
        {
            var response = new SingleModelResponse<Product>() as ISingleModelResponse<Product>;

            try
            {
                response.Model = await Task.Run(() =>
                    {
                        return BusinessObject.GetProduct(new Product(id));
                    });
            }
            catch (Exception ex)
            {
                ExceptionHelper.Publish(ex);

                response.Error = true;
                response.ErrorMessage = ex.Message;
            }

            return response.ToHttpResponse(Request);
        }

        // POST: api/Product
        [HttpPost]
        [Route("Product")]
        public async Task<HttpResponseMessage> CreateProduct([FromBody]Product value)
        {
            var response = new SingleModelResponse<Product>() as ISingleModelResponse<Product>;

            try
            {
                response.Model = await Task.Run(() =>
                    {
                        return BusinessObject.CreateProduct(value);
                    });
            }
            catch (Exception ex)
            {
                ExceptionHelper.Publish(ex);

                response.Error = true;
                response.ErrorMessage = ex.Message;
            }

            return response.ToHttpResponse(Request);
        }

        // PUT: api/Product/5
        [HttpPut]
        [Route("Product")]
        public async Task<HttpResponseMessage> UpdateProduct(Int32 id, [FromBody]Product value)
        {
            var response = new SingleModelResponse<Product>() as ISingleModelResponse<Product>;

            try
            {
                var entity = await Task.Run(() =>
                    {
                        return BusinessObject.UpdateProduct(value);
                    });

                response.Model = entity;
            }
            catch (Exception ex)
            {
                ExceptionHelper.Publish(ex);

                response.Error = true;
                response.ErrorMessage = ex.Message;
            }

            return response.ToHttpResponse(Request);
        }

        // DELETE: api/Product/5
        [HttpDelete]
        [Route("Product")]
        public async Task<HttpResponseMessage> DeleteProduct(Int32 id)
        {
            var response = new SingleModelResponse<Product>() as ISingleModelResponse<Product>;

            try
            {
                var entity = await Task.Run(() =>
                    {
                        return BusinessObject.DeleteProduct(new Product(id));
                    });

                response.Model = entity;
            }
            catch (Exception ex)
            {
                ExceptionHelper.Publish(ex);

                response.Error = true;
                response.ErrorMessage = ex.Message;
            }

            return response.ToHttpResponse(Request);
        }
    }
}
