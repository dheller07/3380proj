# 3380proj

database dump file: DATABASE.sql

front end react app: client directory
to run it -- 
    
    'npm start' in console while in client directory

back end express app: server directory
to connect to db -- after importing the dump file, update db.config.js (found in /3380proj/server/config)
    
    USERNAME: <your mysql user>
    PASSWORD <your mysql user password>
    DB: <the name of the database created from the dump file
    
to run it -- 
    
    'node server.js' in console while in server directory
