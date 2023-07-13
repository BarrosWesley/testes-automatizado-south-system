
Feature: Realizar Pesquisa

    Background:
        Given que estou na página de pesquisa

    Scenario: Pesquisa bem-sucedida
        When insiro o termo de pesquisa "agibank credito"
        Then devo ver resultados relevantes

    Scenario: Pesquisa vazia
        When deixo o campo de pesquisa em branco
        Then devo ver a mensagem " "

    Scenario: Pesquisa com termo inválido
        When insiro um termo de pesquisa inválido "caracteres inválidos"
        Then devo ver a mensagem de erro "Nenhum resultado"

    Scenario: Pesquisa com várias palavras-chave
        When insiro a palavra-chave "Agibank"
        Then devo ver o seguinte resultado "Agibank é vencedor do Prêmio Cliente SA 2023"

    Scenario: Pesquisa por termos compostos entre aspas
        When insiro a palavra-chave "\'Agibank\'"
        Then devo ver o seguinte resultado "Agibank é vencedor do Prêmio Cliente SA 2023"

