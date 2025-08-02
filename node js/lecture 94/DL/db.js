const mysql=require("mysql2");
const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ydra1349',
    database: 'projectb'
});

db.connect((err)=>{
  if(err){
    console.error("❌ Connection error:");
    console.error("Code:", err.code);         // e.g., ER_ACCESS_DENIED_ERROR
    console.error("Errno:", err.errno);       // e.g., 1045
    console.error("SQL Message:", err.sqlMessage); // e.g., Access denied for user 'root'
    console.error("Stack:", err.stack);       // Full trace
    process.exit(1); // Optional: stop the app if DB fails
  }  
  else{
    console.log('connected to database');
  }
})
module.exports=db;
