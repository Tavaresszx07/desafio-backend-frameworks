# Desafio de Frameworks Back-end:

Este repositório está com a estrutura inicial de dois projetos para mostrar a organização em camadas, que seria o MVC (Model, View e Controller), mas em diferentes linguagens.

## Estrutura do Projeto:

O repositório está dividido em duas principais linguagens:

1. **/node-express**: Implementação do CRUD de usuários usando Node.js e Express.
2. **/java-springboot**: Implementação do CRUD de usuários usando Java e Spring Boot.

Os dois projetos seguem o mesmo padrão das pastas:

**Models**: Definição das entidades e regras de dados.
**Controllers**: Lógica de controle das requisições.
**Routes/Services**: Gerenciamento de rotas e serviços.

## 1. Análise Comparativa:

**Configuração**: O Node.js/Express é mais rápido e minimalista (`npm init`), mas exige criar as pastas manualmente. Já o Java/Spring Boot usa o **Spring Initializr**, que já entrega a estrutura de pastas e pacotes pronta, economizando o tempo de coodagem.

**Código**: O Node.js é mais flexível e menos verboso. Já o Java é fortemente tipado e focado em orientação a objetos, o que o torna mais verboso, porém ele é mais seguro para projetos grandes.

**Dependências**: Node.js usa NPM (`package.json`). No Java usa Maven (`pom.xml`) ou Gradle.

## 2. Arquitetura em Camadas (MVC):

A divisão em camadas facilita a manutenção e a escalabilidade do software.
No contexto de **"Cadastro de Usuários"**:

**Model**: Seria responsável por "montar" os dados do usuário (nome, email, senha) e aplicar as regras antes de salvar no banco de dados.
**Controller**: Atua como o meio de receber os dados da requisição, aplicando as regras necessárias e retornando o status para o usuário.
**View**: No contexto de APIs é a camada que faz a apresentação dos dados, normalmente apresentada pelo retorno em formato JSON, que será consumido pela interface do usuário.

Essa separação permite que as possíveis mudanças na lógica de dados não afetem a forma de mostrar os dados para o usuário.
