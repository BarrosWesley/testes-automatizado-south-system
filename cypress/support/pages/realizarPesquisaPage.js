class RealziarPesquisaPage {

  // Método para verificar se é possível inserir um termo de pesquisa válido e obter resultados relevantes
  pesquisaBemSucedida(termoDePesquisa) {
    cy.pesquisar(termoDePesquisa)
  }

  // Método para verificar se o campo de pesquisa permite deixá-lo em branco e exibe uma mensagem adequada
  pesquisaVazia() {
   cy.pesquisar(' ')
  }

  // Método para testar a inserção de caracteres inválidos no campo de pesquisa
  pesquisaComTermoInvalido(termoInvalido) {
    cy.pesquisar(termoInvalido)
  }

  // Método para testar a pesquisa por palavra-chave
  pesquisaPorPalavraChave(palavraChave) {
    cy.pesquisar(palavraChave)
  }

  // Método para testar a pesquisa com várias palavras-chave
  pesquisaComVariasPalavrasChave(palavra1, palavra2) {
    cy.pesquisar(palavra1)
    cy.pesquisar(palavra2)
  }

  // Método para testar a sensibilidade a maiúsculas e minúsculas na pesquisa
  pesquisaComSensibilidade(palavraMinuscula, palavraMaiuscula) {
    cy.pesquisar(palavraMinuscula)
    cy.pesquisar(palavraMaiuscula)
  }

  // Método para testar a pesquisa por categoria
  pesquisaPorCategoria(categoria, termoDePesquisa) {
    cy.pesquisar(categoria)
    cy.pesquisar(termoDePesquisa)
  }

  // Método para testar a exibição das sugestões automáticas durante a pesquisa
  pesquisaComSugestoesAutomaticas(termoDigitado) {
   cy.pesquisar(termoDigitado)
  }

  // Método para testar a pesquisa por sinônimos
  pesquisaPorSinonimos(termoSinonimo) {
    cy.pesquisar(termoSinonimo)
  }

  pesquisaPorTermosCompostos(termoComposto) {
    cy.pesquisar(termoComposto)
  }
}

module.exports = new RealziarPesquisaPage();
