const mysql = require('mysql');
const connexio = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'restapi_projecte',
    port: '3306'
});
connexio.connect();

const validarusuari = (req,res)=>{
    const {email,passwd} = req.body;
    connexio.query(
        "Select email from usuari where email = '"+email+"' and passwd = '"+passwd+"'",function(error,result,fields){
           if(error){
               throw error;
           }
           else{
               res.json({
                   "Usuari validat correctament": result
                })
           };
            
        }
    );
}

const insertarusuari = (req,res)=>{
    const {email,passwd,usuari_tipus_id,activat} = req.body;
    
}
module.exports={
    validarusuari
    
}