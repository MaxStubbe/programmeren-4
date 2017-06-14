
-- node_mysql_user aanmaken en rechten geven op Sakila
CREATE USER 'node_mysql_user'@'localhost' IDENTIFIED BY 'secret';

GRANT ALL ON `sakila`.* TO 'node_mysql_user'@'localhost';
