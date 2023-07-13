# testes-automatizado-south-system
Repositório criado para os Testes automatizados blogdoagi

# requisitos 

Escolha a linguagem de programação de sua preferência para automatizar os dois principais cenários da questão anterior.

INSTRUÇÕES: Crie o repositório no GitHub (público) e COPIE e COLE o link aqui. Desenvolva a automação e suba o código no repositório.

DICAS ÚTEIS:
1. Reserve um tempo para fazer a automação, pois boas práticas serão consideradas.
2. Primeiramente, crie o repositório e já cole aqui para não correr o risco de sua internet ficar instável e perder a sessão.
3. Qualquer problema entre em contato com o recrutador. Nosso time estará à disposição para tirar dúvidas.

# Testes de Pesquisa em Cypress

Este repositório contém testes automatizados para a funcionalidade de pesquisa no blogdoagi, usando o framework Cypress.

## Pré-requisitos

Antes de executar os testes, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org) (versão 12 ou superior)
- [Cypress](https://www.cypress.io) (instalado globalmente ou localmente no projeto)

## Configuração

Siga as etapas abaixo para configurar e executar os testes:

1. Clone este repositório para sua máquina local:

   ```bash
   git clone <URL do repositório>

2. Navegue até o diretório do projeto:
    
    ```bash
    cd nome-do-projeto

3. Instale as dependências do projeto:
   
    ```bash
    npm install

4. Inicie o Cypress:
    ```bash
    npx cypress open

No Cypress Test Runner, clique no arquivo de teste pesquisa.spec.js para executar os testes.

## Estrutura do Projeto
O diretório cypress/feature contém o arquivo realizarpesquisa.feature, onde os testes da consulta estão definidos.
O diretório cypress/support/step_definitions contém o arquivo steps.js, onde estão definidos os steps personalizados para os cenários de teste.
O diretório cypress/support/pages estão armazenados os métodos de execução.

## Personalização dos Testes
Para personalizar os testes, você pode editar o arquivo realizarPesquisa.feature e adicionar ou modificar os cenários de teste conforme necessário.
Os steps personalizados relacionados aos cenários de teste estão definidos no arquivo steps.js, onde você pode adicionar mais steps ou ajustar os existentes conforme necessário.

## Suporte
Se você encontrar algum problema ou tiver alguma dúvida, sinta-se à vontade para abrir uma issue neste repositório.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir pull requests com melhorias, correções de bugs ou novos recursos.

## Licença
Este projeto está licenciado sob a licença MIT.