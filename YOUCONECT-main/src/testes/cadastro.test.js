//testes para verificar se o email é válido e se o domínio é válido

// Importa a biblioteca React para usar componentes e hooks.
import React from 'react';
// Importa o MemoryRouter para simular o roteamento em testes.
import { MemoryRouter } from 'react-router-dom';
// Importa funções da Testing Library para renderizar componentes e simular eventos.
import { render, fireEvent, screen } from '@testing-library/react';
// Importa as extensões da jest-dom para facilitar as asserções em testes.
import '@testing-library/jest-dom'; // npm install --save-dev @testing-library/jest-dom
// Importa o componente Cadastre que está sendo testado.
import Cadastre from '../views/components/cadastre';

// Define um teste com uma descrição do que está sendo testado.
test('testando se é aceito somente o domínio @ba.estudante.senai.br', () => {
    // Renderiza o componente Cadastre dentro de um MemoryRouter para simular o ambiente de roteamento.
    render(
        <MemoryRouter>
            <Cadastre />
        </MemoryRouter>
    );

    // Seleciona o campo de entrada de email pelo seu placeholder.
    const emailInput = screen.getByPlaceholderText('Email');
    // Seleciona o botão de submit (que é um input do tipo "submit") pelo seu valor de exibição.
    const submitButton = screen.getByDisplayValue('Cadastrar');

    // Testa email com domínio inválido
    // Simula a mudança no valor do input de email para um email inválido.
    fireEvent.change(emailInput, { target: { value: 'usuario@gmail.com' } });
    // Simula o clique no botão de cadastrar.
    fireEvent.click(submitButton);
    // Verifica se a mensagem de erro aparece na tela, indicando que o domínio é inválido.
    expect(screen.getByText('Email deve ser da instituição @ba.estudante.senai.br')).toBeInTheDocument();

    // Testa email com domínio válido
    // Simula a mudança no valor do input de email para um email válido.
    fireEvent.change(emailInput, { target: { value: 'usuario@ba.estudante.senai.br' } });
    // Simula o clique no botão de cadastrar novamente.
    fireEvent.click(submitButton);
    // Verifica se a mensagem de erro não aparece na tela, indicando que o domínio é aceito.
    expect(screen.queryByText('Email deve ser da instituição @ba.estudante.senai.br')).not.toBeInTheDocument();

    //queryByText para retornar vazio caso o email não seja válido.
});


/* React é a biblioteca fundamental para a construção de interfaces de usuário.
MemoryRouter é usado para testar componentes que dependem do roteamento sem precisar de um navegador real.
render, fireEvent e screen são funções da Testing Library que permitem renderizar componentes, simular eventos do usuário e acessar elementos na tela, respectivamente.
jest-dom fornece uma série de matchers personalizados para melhorar a legibilidade e a expressividade dos testes, como toBeInTheDocument, que verifica se um elemento está presente na árvore de renderização.

O teste verifica se o campo de email aceita apenas endereços que terminam com @ba.estudante.senai.br, exibindo uma mensagem de erro para endereços inválidos e garantindo que não haja mensagem de erro para endereços válidos.
*/