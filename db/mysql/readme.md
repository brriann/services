https://hub.docker.com/_/mysql

docker pull mysql
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
docker exec -ti mysql bash

mysql -p root
show databases;
exit
exit

MySQL Workbench

Dockerfile
https://stackoverflow.com/questions/25920029/setting-up-mysql-and-importing-dump-within-dockerfile

https://www.globo.tech/learning-center/mysql-101-basics/
http://g2pc1.bu.edu/~qzpeng/manual/MySQL%20Commands.htm
