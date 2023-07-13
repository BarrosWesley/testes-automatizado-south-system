import { 
    Given, 
    When, 
    Then, 
} from '@badeball/cypress-cucumber-preprocessor';

import RealziarPesquisaPage from '../pages/realizarPesquisaPage'
// Passo dado que estou na página de pesquisa

Given("que estou na página de pesquisa", () => {
    cy.visit("https://blogdoagi.com.br/")
  });
  
  // Passo quando insiro o termo de pesquisa {string}
  When('insiro o termo de pesquisa {string}', (termoDePesquisa) => {
    // Chame o método pesquisaBemSucedida passando o termo de pesquisa
    RealziarPesquisaPage.pesquisaBemSucedida(termoDePesquisa);
  });
  
  // Passo quando deixo o campo de pesquisa em branco
  When('deixo o campo de pesquisa em branco', () => {
    // Chame o método pesquisaVazia
    RealziarPesquisaPage.pesquisaVazia();
  });
  
  // Passo quando insiro um termo de pesquisa inválido {string}
  When('insiro um termo de pesquisa inválido {string}', (termoInvalido) => {
    // Chame o método pesquisaComTermoInvalido passando o termo inválido
    RealziarPesquisaPage.pesquisaComTermoInvalido(termoInvalido);
  });
  
  // Passo quando insiro a palavra-chave {string}
  When('insiro a palavra-chave {string}', (palavraChave) => {
    // Chame o método pesquisaPorPalavraChave passando a palavra-chave
    RealziarPesquisaPage.pesquisaPorPalavraChave(palavraChave);
  });
  
  // Passo quando insiro as palavras-chave {string} {string}
  When('insiro as palavras-chave {string} {string}', (palavra1, palavra2) => {
    // Chame o método pesquisaComVariasPalavrasChave passando as palavras-chave
    RealziarPesquisaPage.pesquisaComVariasPalavrasChave(palavra1, palavra2);
  });
  
  // Passo quando insiro o termo de pesquisa {string} em letras minúsculas e em letras maiúsculas
  When('insiro o termo de pesquisa {string} em letras minúsculas e em letras maiúsculas', (palavraMinuscula, palavraMaiuscula) => {
    // Chame o método pesquisaComSensibilidade passando as palavras em minúsculas e maiúsculas
    RealziarPesquisaPage.pesquisaComSensibilidade(palavraMinuscula, palavraMaiuscula);
  });
  
  // Passo quando seleciono a categoria {string} e insiro o termo de pesquisa {string}
  When('seleciono a categoria {string} e insiro o termo de pesquisa {string}', (categoria, termoDePesquisa) => {
    // Chame o método pesquisaPorCategoria passando a categoria e o termo de pesquisa
    RealziarPesquisaPage.pesquisaPorCategoria(categoria, termoDePesquisa);
  });
  
  // Passo quando digito o termo de pesquisa {string}
  When('digito o termo de pesquisa {string}', (termoDigitado) => {
    // Chame o método pesquisaComSugestoesAutomaticas passando o termo digitado
    RealziarPesquisaPage.pesquisaComSugestoesAutomaticas(termoDigitado);
  });
  
  // Passo quando insiro o termo de pesquisa {string} entre aspas
  When('insiro o termo de pesquisa {string} entre aspas', (termoComposto) => {
    // Chame o método pesquisaPorTermosCompostos passando o termo composto
    RealziarPesquisaPage.pesquisaPorTermosCompostos(termoComposto);
  });
  
  // Passo então devo ver resultados relevantes
  Then('devo ver resultados relevantes', () => {
    cy.validarPesquisa("agibank credito")
  });
  
  // Passo então devo ver a mensagem {string}
  Then('devo ver a mensagem {string}', (mensagem) => {
    cy.validarPesquisa(mensagem)
  });
  
  // Passo então devo ver a mensagem de erro {string}
  Then('devo ver a mensagem de erro {string}', (mensagemErro) => {
    //cy.contains("mensagemErro")
    cy.get('#blog-wrap').should('contain', mensagemErro)
  });

  Then('devo ver o seguinte resultado {string}', (resultado) => {
    cy.get('#blog-wrap').should('contain', resultado)
  })