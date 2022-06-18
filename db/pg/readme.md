https://hub.docker.com/_/postgres

docker pull postgres
docker run -p 5432:5432 --name pg -e POSTGRES_PASSWORD=postgres -d postgres

docker exec -ti pg bash

psql -U postgres -W

create database dbname;

\l, \list - list all db's
\c dbname - connect to db
\dt - list tables in current db
select * from tablename;

\q - quit

docker stop pg
docker start pg

PgAdmin
localhost:5432
postgres
postgres

Dockerfile
https://stackoverflow.com/questions/36975330/configure-dockerfile-with-postgres


https://www.geeksforgeeks.org/postgresql-psql-commands/
https://www.postgresqltutorial.com/postgresql-administration/psql-commands/