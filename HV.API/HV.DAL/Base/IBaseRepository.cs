using System;

namespace HV.DAL
{
    public interface IBaseRepository : IDisposable
    {
        bool CanDispose { get; set; }
        void Dispose(bool force);
    }
}
