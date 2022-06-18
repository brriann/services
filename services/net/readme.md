# dotnet cli

https://docs.microsoft.com/en-us/dotnet/core/install/linux-ubuntu#2204
https://code.visualstudio.com/docs/containers/quickstart-aspnet-core


## RUN LOCALLY

dotnet restore
dotnet build
dotnet run

http://localhost:5149/weatherforecast


## RUN TESTS

dotnet test
dotnet test -h

./tests/weatherforecastcontroller.test.cs
https://xunit.net/docs/comparisons


## DEBUG

## DOTNET-EFCORE-SQLSERVER

dotnet add package Microsoft.EntityFrameworkCore.SqlServer

dotnet tool install --global dotnet-ef
dotnet add package Microsoft.EntityFrameworkCore.Design

dotnet ef

dotnet ef context

dotnet ef dbcontext scaffold "Server=127.0.0.1;Initial Catalog=db1;Persist Security Info=False;User ID=sa;Password=S0mePassw0rd!;" Microsoft.EntityFrameworkCore.SqlServer -o Model

https://docs.microsoft.com/en-us/ef/core/get-started/overview/install