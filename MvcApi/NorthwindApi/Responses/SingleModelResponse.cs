using System;
using System.Runtime.Serialization;

namespace NorthwindApi.Responses
{
    public class SingleModelResponse<TModel> : ISingleModelResponse<TModel>
    {
        public SingleModelResponse()
        {

        }

        [DataMember(Name = "Message")]
        public String Message { get; set; }

        [DataMember(Name = "Error")]
        public Boolean Error { get; set; }

        [DataMember(Name = "ErrorMessage")]
        public String ErrorMessage { get; set; }

        [DataMember(Name = "model")]
        public TModel Model { get; set; }
    }
}
