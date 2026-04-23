// Exemplo de um controlador lidando com a lógica de usuários
const UserController = {
    getAllUsers: (req, res) => {
        // Aqui viria a lógica de buscar no banco de dados
        res.send("Retornando lista de usuários...");
    }
};
module.exports = UserController;