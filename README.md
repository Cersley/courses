# courses

restore db:
 psql -h localhost -p 5432 -U yaroslav -d courses_editor -f pg-restore
 
install dependences:
 npm i
 
start server: 
 npm start
