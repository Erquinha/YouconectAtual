//testes de campos obrigatórios

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cadastre from '../views/components/cadastre';
import '@testing-library/jest-dom'; //npm install --save-dev @testing-library/jest-dom



describe('Testes para a tela de cadastro', () => {

  test('não deve permitir cadastro com campos obrigatórios vazios', async () => {
    render(
      <MemoryRouter>
        <Cadastre />
      </MemoryRouter>
    );

    // Clica no botão de submit
    const submitButton = screen.getByDisplayValue('Cadastrar');
    fireEvent.click(submitButton); //Simula um clique no botão de cadastro, que deve disparar a validação do formulário.

    // Verifica se as mensagens de erro aparecem 
    expect(await screen.findByText('Nome completo é obrigatório')).toBeInTheDocument(); //Após a simulação de clique, o teste verifica se a mensagem de erro para o campo de nome aparece na tela
    expect(await screen.findByText('Email inválido')).toBeInTheDocument(); //o screen são vários metodos, utilizei o findbytext
    expect(await screen.findByText('Telefone inválido')).toBeInTheDocument();  //findByText serve para retornar uma mensagem de erro
    expect(await screen.findByText('Data de nascimento é obrigatória')).toBeInTheDocument();
    expect(await screen.findByText('Senha deve ter pelo menos 8 caracteres')).toBeInTheDocument();
  });
});

