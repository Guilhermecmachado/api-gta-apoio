const CadastroService = require('../services/CadastroService');

module.exports = {
    inserirCadastro: async (req, res) => {
        let json = { erro: '', result: {} };
        let email = req.body.email;
        let senha = req.body.senha;
        let nome = req.body.nome;

        if (email && senha && nome) {
            let cadastro = await CadastroService.inserirCadastro(email, senha, nome);
            if (cadastro) {
                json.result = cadastro;
            }
        } else {
            json.result = "Preencha todos os campos !!!";
        }

        res.json(json);
    },

    buscarCadastro: async (req, res) => {
        let json = {erro:'', result:{}};
        let id_usuario = req.params.id_usuario;        
        let cadastro = await CadastroService.buscarCadastro(placa);
      
        if(cadastro){
            json.result = veiculo;
        }else{
            json.result = "Não achou"
        }
        res.json(json);
    },


    validarCadastro: async (req, res) => {
        let json = { erro: '', result: {} };
        let email = req.body.email;
        let senha = req.body.senha;

        if (email && senha) {
            let cadastro = await CadastroService.loginCadastro(email, senha);
            if (cadastro) {
                json.result = cadastro;
            }
        } else {
            json.result = "Preencha todos os campos !!!";
        }

        res.json(json);
    },
};