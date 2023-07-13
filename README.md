# testes-automatizado-south-system
repositório criado para criação dos casos de testes referente a prova técnica da suth

# requisitos 

Escolha a linguagem de programação de sua preferência para automatizar os dois principais cenários da questão anterior.

INSTRUÇÕES: Crie o repositório no GitHub (público) e COPIE e COLE o link aqui. Desenvolva a automação e suba o código no repositório.

DICAS ÚTEIS:
1. Reserve um tempo para fazer a automação, pois boas práticas serão consideradas.
2. Primeiramente, crie o repositório e já cole aqui para não correr o risco de sua internet ficar instável e perder a sessão.
3. Qualquer problema entre em contato com o recrutador. Nosso time estará à disposição para tirar dúvidas.

# Testes de Pesquisa em Cypress

Este repositório contém testes automatizados para a funcionalidade de pesquisa em um site, usando o framework Cypress.

## Pré-requisitos

Antes de executar os testes, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org) (versão 12 ou superior)
- [Cypress](https://www.cypress.io) (instalado globalmente ou localmente no projeto)

## Configuração

Siga as etapas abaixo para configurar e executar os testes:

1. Clone este repositório para sua máquina local:

   ```bash
   git clone <URL do repositório>

Navegue até o diretório do projeto:
cd nome-do-projeto

Instale as dependências do projeto:
npm install

Inicie o Cypress:
npx cypress open

No Cypress Test Runner, clique no arquivo de teste pesquisa.spec.js para executar os testes.

## Estrutura do Projeto
O diretório cypress/integration contém o arquivo pesquisa.spec.js, onde os testes de pesquisa estão definidos.
O diretório cypress/support contém o arquivo steps.js, onde estão definidos os steps personalizados para os cenários de teste.
O diretório cypress/fixtures pode ser usado para armazenar dados de teste ou exemplos de respostas da API, se necessário.

## Personalização dos Testes
Para personalizar os testes, você pode editar o arquivo pesquisa.spec.js e adicionar ou modificar os cenários de teste conforme necessário.
Os steps personalizados relacionados aos cenários de teste estão definidos no arquivo steps.js, onde você pode adicionar mais steps ou ajustar os existentes conforme necessário.

## Relatórios de Teste
Os relatórios de testes são gerados automaticamente pelo Cypress e estão localizados no diretório cypress/reports.
Os relatórios podem ser acessados após a execução dos testes, clicando no arquivo HTML correspondente.

## Suporte
Se você encontrar algum problema ou tiver alguma dúvida, sinta-se à vontade para abrir uma issue neste repositório.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir pull requests com melhorias, correções de bugs ou novos recursos.

## Licença
Este projeto está licenciado sob a licença MIT.