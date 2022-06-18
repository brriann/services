https://hub.docker.com/_/mysql

docker pull mysql
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:latest

docker exec -ti mysql bash

mysql -p

show databases;
use mysql;
show tables;
select * from tablename;

exit
exit

docker stop mysql
docker start mysql

MySQL Workbench
localhost:3306
root
root

Dockerfile
https://stackoverflow.com/questions/25920029/setting-up-mysql-and-importing-dump-within-dockerfile

https://www.globo.tech/learning-center/mysql-101-basics/
http://g2pc1.bu.edu/~qzpeng/manual/MySQL%20Commands.htm
