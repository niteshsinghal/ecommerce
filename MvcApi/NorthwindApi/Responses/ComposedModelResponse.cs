using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace NorthwindApi.Responses
{
    [DataContract]
    public class ComposedModelResponse<TModel> : IComposedModelResponse<TModel>
    {
        public ComposedModelResponse()
        {

        }

        [DataMember(Name = "Message")]
        public String Message { get; set; }

        [DataMember(Name = "Error")]
        public Boolean Error { get; set; }

        [DataMember(Name = "ErrorMessage")]
        public String ErrorMessage { get; set; }

        [DataMember(Name = "Model")]
        public IEnumerable<TModel> Model { get; set; }
    }
}
