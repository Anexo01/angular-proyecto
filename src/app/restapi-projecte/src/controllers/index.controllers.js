const mysql = require('mysql');
const connexio = mysql.createConnection({
    user: 'admin',
    host: '192.168.192.177',
    password: 'admin',
    database: 'projecte',
    port: '3306'
});
connexio.connect();

const validarusuari = (req,res)=>{
    const {email,passwd} = req.body;
    connexio.query(
        "Select email from usuari where email = '"+email+"' and passwd = SHA1('"+passwd+"')",function(error,result,fields){
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
    connexio.query("Insert into usuari(email,passwd,usuari_tipus_id,activat) values('"+email+"',SHA1('"+passwd+"'),"+usuari_tipus_id+","+activat+")",function(error,result,fields){
        if(error){
            throw error;
        }
        else{
            res.json({
                "Usuari insertat correctament": email
            })
        }
    })
}
module.exports={
    validarusuari,
    insertarusuari
}
