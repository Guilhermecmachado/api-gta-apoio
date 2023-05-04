const db = require('./db');
module.exports = {
inserirNota: (id_nota,id_receita,id_usuario)=>{
    return new Promise((aceito, rejeitado)=>{
        db.query('Replace into nota_usuario (id_nota,id_receita,id_usuario) VALUES(?,?,?) '
        ,[id_nota,id_receita,id_usuario],(error, results)=>{
            if(error){rejeitado(error); return}                
            aceito(results)                    
        })
    })
},





};