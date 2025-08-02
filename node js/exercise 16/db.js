const mysql=require("mysql2");
const db=mysql.createConnection({
        host: "localhost",
    user: "root",
    password: "ydra1349",
    database: "company"
});

db.connect((err)=>{
if(err){
console.log('error connecting to db');

}    
else{
    console.log('connected to db');
}
})
module.exports=db;
