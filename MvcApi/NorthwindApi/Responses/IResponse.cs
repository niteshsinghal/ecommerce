using System;

namespace NorthwindApi.Responses
{
    public interface IResponse
    {
        String Message { get; set; }

        Boolean Error { get; set; }

        String ErrorMessage { get; set; }
    }
}
