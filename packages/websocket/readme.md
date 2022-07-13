This is a Websocket Node js application which will fetch the data from kraken server.There is another server which will take your custom data and pass to the kraken server. There is some protected data which requires Authentication, so you need to authenticate yourself in order to get the protected data..

Setup Requirement
We require below services/software on system for project setup.

Xampp

Setup Guide (Command line instructions)\


make a file ".env" in the root of this package folder

DB_PORT=3306
DB_HOST='your host'
DB_USER='your db user name'
DB_NAME='your db name'
DB_PASSWORD='your db password'
SECRET_KEY='your secret key for jwt'
REFRESH_SECRET_KEY='your secret key for refresh key of jwt'
apiPublicKey='Public api key of kraken'
apiPrivateKey='private api key of kraken'



and run 
```
npm i
```
Open Mysql

Create Database - With the same name you are specifying above
```
and then run the command
```
knex migrate:latest;
```
