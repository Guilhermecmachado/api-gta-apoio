const db = require('./db');
module.exports = {
inserirReceita: (nome_receita,ingre_receita,prepa_receita,obs_receita,id_usuario)=>{
    return new Promise((aceito, rejeitado)=>{
        db.query('INSERT INTO cadastra_receita (nome_receita,ingre_receita,prepa_receita,obs_receita,id_usuario) VALUES(?,?,?,?,?) '
        ,[nome_receita,ingre_receita,prepa_receita,obs_receita,id_usuario],(error, results)=>{
            if(error){rejeitado(error); return}                
            aceito(results)                    
        })
    })
},

buscarTodasReceitas: (id)=>{
    return new Promise((aceito,rejeitado)=>{
        db.query('SELECT * FROM cadastra_receita  WHERE id_usuario != ?',[id],(error, results)=>{
           if(error){rejeitado(error); return}     
           aceito(results);
         })
    }) },

    buscarTodasReceitasUsuario: (id)=>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM cadastra_receita c INNER JOIN nota_usuario n WHERE n.id_usuario = ?',[id],(error, results)=>{
               if(error){rejeitado(error); return}     
               aceito(results);
             })
        }) },

};