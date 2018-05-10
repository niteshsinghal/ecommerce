using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Configuration;

namespace NorthwindApi.Helpers
{
    static class Common
    {
        
        public static string GetFormattedFileName(string filename)
        {
            return string.Format("IMPORT_{0:dd-MM-yyyy_hh-mm-ss-tt}_{1}", DateTime.Now, filename.Trim().Replace(" ", "-"));
        }
        public static void BulkCopyData(string _connectionString, string _destinationTableName, DataTable _dt)
        {

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {

                using (SqlBulkCopy bulkCopy = new SqlBulkCopy(connection, SqlBulkCopyOptions.TableLock | SqlBulkCopyOptions.FireTriggers | SqlBulkCopyOptions.UseInternalTransaction, null))
                {
                    using (SqlCommand cmdTruncate = new SqlCommand("Truncate table " + _destinationTableName + "", connection))
                    {

                        connection.Open();
                        cmdTruncate.CommandTimeout = 300;
                        cmdTruncate.ExecuteNonQuery();

                        bulkCopy.DestinationTableName = _destinationTableName;
                        bulkCopy.BulkCopyTimeout = 300;
                        bulkCopy.BatchSize = 10000;
                        bulkCopy.WriteToServer(_dt);

                        connection.Close();
                    }

                }
            }

        }
        public static DataTable AsDataTable<T>(this IEnumerable<T> data)
        {
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(typeof(T));
            var table = new DataTable();
            foreach (PropertyDescriptor prop in properties)
                table.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
            foreach (T item in data)
            {
                DataRow row = table.NewRow();
                foreach (PropertyDescriptor prop in properties)
                    row[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
                table.Rows.Add(row);
            }
            return table;
        }
        private static Decimal? ConvertToDecimal(string strDecimalIn)
        {
            Decimal dTemp = -1111.456m;
            if (Decimal.TryParse(strDecimalIn, out dTemp))
                return dTemp;
            else
                return null;
        }

        private static DateTime? ConvertToDateTime(string strDateIn)
        {
            DateTime tempDate = DateTime.MaxValue;
            if (DateTime.TryParse(strDateIn, out tempDate))
                return tempDate;
            else
                return null;
        }
        public static void WriteResultsToFile(string strResults,int employerID)
        {
            DirectoryInfo di = null;
            FileStream fsOut = null;
            StreamWriter sw = null;

            string strFileName = "";
            string strPath = "";
            string strPathAndFile = "";
            try
            {
                strPath = ConfigurationManager.AppSettings["appRoot"].ToString() + @"\Uploads\WebJob\" + employerID + @"\ResultsFiles";
               
                if (!Directory.Exists(strPath))
                    di = Directory.CreateDirectory(strPath);
                strFileName = "Import" + DateTime.Now.Ticks + ".txt";
                strPathAndFile = strPath + strFileName;
                if (File.Exists(strPathAndFile))
                    File.Delete(strPathAndFile);

                fsOut = File.OpenWrite(strPathAndFile);
                sw = new StreamWriter(fsOut);

                sw.WriteLine("Results of import - " + DateTime.Now);
                sw.WriteLine();
                sw.WriteLine(strResults);

                if (sw != null)
                {
                    sw.Flush();
                    sw.Close();
                    sw = null;
                }

                if (fsOut != null)
                {
                    fsOut.Close();
                    fsOut = null;
                }
            }
            catch { }
            finally
            {
                if (sw != null)
                {
                    sw.Flush();
                    sw.Close();
                }
                if (fsOut != null)
                    fsOut.Close();
            }
        }
    }
}
