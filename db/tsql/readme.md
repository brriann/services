https://hub.docker.com/_/microsoft-mssql-server

docker pull mcr.microsoft.com/mssql/server:2022-latest
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=S0mePassw0rd!" -p 1433:1433 --name tsql --hostname tsql -d mcr.microsoft.com/mssql/server:2022-latest

docker exec -ti tsql bash

/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P S0mePassw0rd!

create database dbname;
GO
select name from sys.databases;
GO

USE TestDB;
CREATE TABLE Inventory (id INT, name NVARCHAR(50), quantity INT);
INSERT INTO Inventory VALUES (1, 'banana', 150); INSERT INTO Inventory VALUES (2, 'orange', 154);
GO

SELECT * FROM Inventory WHERE quantity > 152;
GO

quit
exit

SSMS
127.0.0.1
sa
S0mePassw0rd!
Trust server certificate

SQL Profiler

Dockerfile
https://towardsdatascience.com/build-a-mssql-docker-container-800166ecca21

https://docs.microsoft.com/en-us/sql/t-sql/statements/statements?view=sql-server-ver16
https://www.c-sharpcorner.com/UploadFile/ff0d0f/types-of-command-in-sql-server/
