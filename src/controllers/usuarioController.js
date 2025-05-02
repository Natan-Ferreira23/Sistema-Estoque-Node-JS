const Usuario = require('../models/usuarioModel');
const bCrypt = require("bcrypt");
// Listar todos os usuarios
async function listarUsuarios(req, res) {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar usuarios.' });
    }
}

// Buscar usuario por ID
async function buscarUsuarioPorId(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ erro: 'Usuário não encontrado.' });
        }

        res.json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar usuario.' });
    }
}

// Criar novo usuario
async function criarUsuario(req, res) {
    try {
        const { login, email, senha } = req.body;
        if (!login || !email || !senha) {
            return res.status(500).json({ erro: 'Os valores devem ser validos' });
        }
        const senhaHash = await bCrypt.hashSync(senha, 10);

        const novoUsuario = await Usuario.create({
            login,
            email,
            senha: senhaHash
        });

        res.status(200).json({
            id: novoUsuario.id,
            login: novoUsuario.login,
            email: novoUsuario.email
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao criar usuário' });
    }
}

// Atualizar um usuario
async function atualizarUsuario(req, res) {
    try {
        const { id } = req.params;
        const { login, email, senha } = req.body;

        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ erro: 'Usuario não encontrado.' });
        }

        await usuario.update({ login, email, senha });
        res.json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar usuario.' });
    }
}

// Deletar um usuario
async function deletarUsuario(req, res) {
    try {
        const { id } = req.params;

        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ erro: 'Usuário não encontrado.' });
        }

        await usuario.destroy();
        res.json({ mensagem: 'Usuario deletado com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao deletar usuário.' });
    }
}

module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};
