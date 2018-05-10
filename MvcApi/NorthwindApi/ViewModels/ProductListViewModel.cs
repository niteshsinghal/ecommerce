using System;
using Northwind.Core.DataLayer.DataContracts;

namespace NorthwindApi.ViewModels
{
    public class ProductListViewModel
    {
        public ProductListViewModel()
        {

        }

        public ProductListViewModel(ProductListViewModel entity)
        {
            ProductID = entity.ProductID;
            ProductName = entity.ProductName;
            SupplierID = entity.SupplierID;
            CategoryID = entity.CategoryID;
            CategoryName = entity.CategoryName;
            QuantityPerUnit = entity.QuantityPerUnit;
            UnitPrice = entity.UnitPrice;
            UnitsInStock = entity.UnitsInStock;
            UnitsOnOrder = entity.UnitsOnOrder;
            ReorderLevel = entity.ReorderLevel;
            Discontinued = entity.Discontinued;
        }
        public Int32? ProductID { get; set; }

        public String ProductName { get; set; }

        public Int32? SupplierID { get; set; }

        public Int32? CategoryID { get; set; }

        public String CategoryName { get; set; }

        public String QuantityPerUnit { get; set; }

        public Decimal? UnitPrice { get; set; }

        public Int16? UnitsInStock { get; set; }

        public Int16? UnitsOnOrder { get; set; }

        public Int16? ReorderLevel { get; set; }

        public Boolean? Discontinued { get; set; }
    }
}
