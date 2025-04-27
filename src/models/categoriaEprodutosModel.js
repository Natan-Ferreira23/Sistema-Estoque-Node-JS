const Categoria = require('./categoriaModel.js'); // importa o model da Categoria
const Produto = require('./produtoModel.js');     // importa o model do Produto

Produto.belongsTo(Categoria, { foreignKey: 'categoriaId' });
