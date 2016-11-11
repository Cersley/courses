# courses

restore db:
 psql -h localhost -p 5432 -U yaroslav -d courses_editor -f pg-restore
 
install dependencies:
 npm install
 
start server: 
 npm start
