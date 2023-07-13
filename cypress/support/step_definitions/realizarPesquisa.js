import { 
    Given, 
    When, 
    Then, 
} from '@badeball/cypress-cucumber-preprocessor';

import RealziarPesquisaPage from '../pages/realizarPesquisaPage'

Given("que estou na página de pesquisa", () => {
    cy.visit("https://blogdoagi.com.br/")
  });

  When('insiro o termo de pesquisa {string}', (termoDePesquisa) => {
    RealziarPesquisaPage.pesquisaBemSucedida(termoDePesquisa);
  });
  
  When('deixo o campo de pesquisa em branco', () => {
    RealziarPesquisaPage.pesquisaVazia();
  });

  When('insiro um termo de pesquisa inválido {string}', (termoInvalido) => {
    RealziarPesquisaPage.pesquisaComTermoInvalido(termoInvalido);
  });
 
  When('insiro a palavra-chave {string}', (palavraChave) => {
 
    RealziarPesquisaPage.pesquisaPorPalavraChave(palavraChave);
  });
   
  When('insiro o termo de pesquisa {string} entre aspas', (termoComposto) => {
      RealziarPesquisaPage.pesquisaPorTermosCompostos(termoComposto);
  });
 
  Then('devo ver resultados relevantes', () => {
    cy.validarPesquisa("agibank credito")
  });
  
  
  Then('devo ver a mensagem {string}', (mensagem) => {
    cy.validarPesquisa(mensagem)
  });
  
  Then('devo ver a mensagem de erro {string}', (mensagemErro) => {

    cy.get('#blog-wrap').should('contain', mensagemErro)
  });

  Then('devo ver o seguinte resultado {string}', (resultado) => {
    cy.get('#blog-wrap').should('contain', resultado)
  })