Through this application you can perform authentication and Authorization as well as you can encrypt or decrypt your secret message

Setup Requirement
We require below services/software on system for project setup.

Xampp


make a file ".env"

APP_PORT=your_port,\
DB_PORT=your_DB_port,\
DB_HOST=localhost,\
DB_USER=your_DB_user_name,\
SECRET_KEY= your_Secret_key,\
ENCRYPTION_DECRYPTION_KEY = your_secret_key,\
DB_ROOT_PASSWORD= your_db_pswrd,\
DB_NAME= your_db_name,\
DB_PASSWORD= your_db_pswrd,\
REFRESH_SECRET_KEY = your_refresh_token_key,\
SESSION_KEY= your_session_key,\
SESSION_SECRET= your_session_secret,\

and then run
```
npm install
```
Open Mysql

Create Database - With the same name you are specifying above
```
knex migrate:latest;
```

