const { cadastrarUsuario, connection } = require('./db'); // Função de cadastro e conexão

describe('Testes de Performance para Cadastro de Usuário', () => {

  beforeAll(async () => {
    await connection.query("CREATE TABLE IF NOT EXISTS usuarios (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), email VARCHAR(255) UNIQUE, senha VARCHAR(255))");
  });

  afterAll(async () => {
    await connection.query("DROP TABLE IF EXISTS usuarios"); // Limpeza da tabela após os testes
    await connection.end();
  });

  test('deve cadastrar um novo usuário e medir o tempo de resposta', async () => {
    const usuario = {
      nome: 'Erica Marques',
      email: 'erica@gmail.com',
      senha: '123456789',
    };

    const inicio = performance.now();
    const resultado = await cadastrarUsuario(usuario);
    const fim = performance.now();

    const duracao = fim - inicio;
    console.log(`Tempo de execução: ${duracao.toFixed(2)} ms`);
    expect(duracao).toBeLessThanOrEqual(200); // Tempo de resposta esperado

    expect(resultado).toHaveProperty('id');
    expect(resultado).toHaveProperty('nome', 'Erica marques');
    expect(resultado).toHaveProperty('email', 'erica@gmail.com');
  });
});
