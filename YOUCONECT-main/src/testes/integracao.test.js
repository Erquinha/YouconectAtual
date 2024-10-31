import { connection, getUserById } from '../database/db.js';

describe('Testes para getUserById', () => {

    //TESTE DE INTEGRAÇÃO: Verificando se o sistema está inserindo novos dados no banco de dados.
    //OK

    beforeAll(async () => {
        await connection.query("INSERT INTO usuarios (nomeCompleto, email, telefone, data, genero, curso, senha ) VALUES ('Joao', 'JoaoMarcos@ba.estudante.senai.br', '75989562418', 'Masculino', '12345678')");

    });

afterAll(async () => {
    await connection.end();
})

test( 'Retornar o usuário pelo id', async () => {

    const inicio = performance.now();
    const user = await getUserById(1);
    const fim = performance.now();
    const duracao = fim - inicio;
    console.log(`Tempo de execução: ${duracao.toFixed(2)} ms`);

    expect(user).toHaveProperty('nomeCompleto', 'nath');
   
    
    expect(duracao).toBeLessThanOrEqual(50);

    console.log(`usuarios: `, user);
});

});