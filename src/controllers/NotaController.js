const NotaService = require('../services/Notaservice');

module.exports ={
    inserirNota: async (req, res) => {
        let json = {erro:'', result:{}};
        let id_nota = req.body.id_nota;  
        let id_receita = req.body.id_receita
        let id_usuario = req.body.id_usuario
       
        
        if(id_nota && id_receita && id_usuario){
         let cadastro = await NotaService.inserirNota(id_nota,id_receita,id_usuario);
         if(cadastro){
                json.result = cadastro;
        
         }
        }else{
            json.result = "Preencha todos os campos !!!";
        }
     
        res.json(json);
    },
};