class RealziarPesquisaPage {

  pesquisaBemSucedida(termoDePesquisa) {
    cy.pesquisar(termoDePesquisa)
  }

  pesquisaVazia() {
   cy.pesquisar(' ')
  }

  pesquisaComTermoInvalido(termoInvalido) {
    cy.pesquisar(termoInvalido)
  }

  pesquisaPorPalavraChave(palavraChave) {
    cy.pesquisar(palavraChave)
  }

  pesquisaComVariasPalavrasChave(palavra1, palavra2) {
    cy.pesquisar(palavra1)
    cy.pesquisar(palavra2)
  }

  pesquisaComSensibilidade(palavraMinuscula, palavraMaiuscula) {
    cy.pesquisar(palavraMinuscula)
    cy.pesquisar(palavraMaiuscula)
  }

  pesquisaPorCategoria(categoria, termoDePesquisa) {
    cy.pesquisar(categoria)
    cy.pesquisar(termoDePesquisa)
  }

  pesquisaComSugestoesAutomaticas(termoDigitado) {
   cy.pesquisar(termoDigitado)
  }

  pesquisaPorSinonimos(termoSinonimo) {
    cy.pesquisar(termoSinonimo)
  }

  pesquisaPorTermosCompostos(termoComposto) {
    cy.pesquisar(termoComposto)
  }
}

module.exports = new RealziarPesquisaPage();
