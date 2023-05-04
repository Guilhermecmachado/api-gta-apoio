const ReceitasService = require('../services/ReceitasService');

module.exports ={
    inserirReceita: async (req, res) => {
        let json = {erro:'', result:{}};
        let nome_receita = req.body.nome_receita;  
        let ingre_receita = req.body.ingre_receita;
        let prepa_receita = req.body.prepa_receita;    
        let obs_receita = req.body.obs_receita;
        let id_usuario = req.body.id_usuario;
        
        
        if(nome_receita && ingre_receita && prepa_receita && obs_receita && id_usuario){
         let receita = await ReceitasService.inserirReceita(nome_receita,ingre_receita,prepa_receita,obs_receita,id_usuario);
         if(receita){
                json.result = receita;
         }
        }else{
            json.result = "Preencha todos os campos !!!";
        }
     
        res.json(json);
    },


    buscarTodasReceitas: async (req, res) => {
        let json = {erro:'', result:[]};
        let id = req.params.id;
        let receitas = await ReceitasService.buscarTodasReceitas(id);

        for(let i in receitas){
            json.result.push({
                id_receita: receitas[i].id_receita,
                nome_criador: receitas[i].nome_criador,
                nome_receita: receitas[i].nome_receita,
                
            })
        }
        res.json(json);
    },



    buscarTodasReceitasUsuario: async (req, res) => {
        let json = {erro:'', result:[]};
        let id = req.params.id;
        let receitas = await ReceitasService.buscarTodasReceitasUsuario(id);

        for(let i in receitas){
            json.result.push({
                id_receita: receitas[i].id_receita,
                nome_criador: receitas[i].nome_criador,
                nome_receita: receitas[i].nome_receita,
                id_nota: receitas[i].id_nota,
         
            })
        }
        res.json(json);
    },
};