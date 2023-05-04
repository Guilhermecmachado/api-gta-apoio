const db = require('./db');
module.exports = {
inserirCadastro: (email,senha,nome)=>{
    return new Promise((aceito, rejeitado)=>{
        db.query('INSERT INTO cadastra_usuario (email,senha,nome) VALUES(?,?,?)'
        ,[email,senha,nome],(error, results)=>{
            if(error){rejeitado(error); return}                
            aceito(results)                    
        })
    })
},




buscarCadastro: ()=>{
    return new Promise((aceito, rejeitado)=>{
        db.query('SELECT * FROM cadastro_usuario WHERE email=?',[email],(error, results)=>{
            if(error){rejeitado(error); return}  
            if(results.length > 0){
                aceito(results[0])
            }else{
                aceito(false)
            }                  
        })
    })
},

loginCadastro: (email,senha)=>{
    return new Promise((aceito, rejeitado)=>{
        db.query("SELECT id_usuario FROM cadastra_usuario WHERE email=? and senha=?",[email, senha],(error, results)=>{
            if(error){rejeitado(error); return}  
            if(results.length > 0){
                aceito(results);
            }else{
                aceito(false)
            }                  
        })
    })
},





};

