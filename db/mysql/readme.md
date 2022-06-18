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
