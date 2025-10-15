# Teste Técnico: Backend de E-commerce com Supabase

Este repositório contém o código-fonte e a documentação para o teste técnico de desenvolvimento de um backend para um sistema de e-commerce, utilizando a plataforma Supabase.

O projeto foi construído seguindo as melhores práticas, com uma estrutura de banco de dados relacional, uma camada de segurança robusta com RLS, e lógica de negócio automatizada através de Funções de Banco de Dados e Edge Functions.

## 🚀 Funcionalidades Implementadas

- [x] **Estrutura de Tabelas:** Definição do schema do banco de dados com tabelas para `clientes`, `produtos`, `pedidos` e `pedido_itens`.
- [x] **Row-Level Security (RLS):** Implementação de políticas de segurança para garantir que os clientes só possam acessar e modificar seus próprios dados.
- [x] **Funções de Banco de Dados:** Criação de funções SQL (`plpgsql`) para automatizar processos, como `calcular_total_pedido`.
- [x] **Views:** Desenvolvimento de uma `VIEW` (`pedidos_detalhados`) para simplificar a consulta de dados consolidados de pedidos.
- [x] **Edge Functions:** Implementação de duas Edge Functions em Deno/TypeScript:
    - `enviar-confirmacao`: Simula o envio de um e-mail de confirmação de pedido.
    - `exportar-pedido-csv`: Gera e retorna um arquivo CSV com os detalhes de um pedido específico.
- [x] **Documentação:** O código está comentado e os scripts de criação do banco de dados estão versionados neste repositório.

## 🏛️ Estrutura do Banco de Dados

Para garantir a reprodutibilidade e o versionamento da infraestrutura, os scripts SQL utilizados para construir o banco de dados estão salvos na pasta `_banco_de_dados/` deste repositório.

- **`01_estrutura.sql`**: Contém todos os comandos `CREATE TABLE` e `CREATE TYPE`.
- **`02_funcoes_e_views.sql`**: Contém os comandos `CREATE FUNCTION` e `CREATE VIEW`.
- **`03_seguranca_rls.sql`**: Contém os comandos para habilitar RLS e `CREATE POLICY`.
- **`04_dados_iniciais.sql`**: Contém os comandos `INSERT` para popular o banco com dados de teste.

## 🛠️ Tecnologias Utilizadas

- **Plataforma:** Supabase
- **Banco de Dados:** PostgreSQL
- **Segurança:** Row-Level Security (RLS) & JWT
- **Backend (Serverless):** Deno / TypeScript (Supabase Edge Functions)
- **Linguagens:** SQL, PL/pgSQL, TypeScript
- **Ferramentas:** Git, GitHub, Node.js/npm

## 🔑 Acesso e Informações para Teste

Para avaliar o projeto no ambiente da Supabase, utilize as seguintes informações:

* **Link do Projeto Supabase:** `https://supabase.com/dashboard/project/mbxayqbkrqtitovdwxuz`
* **Credenciais do Usuário de Teste:**
    * **E-mail:** `jorge@email.com`
    * **Senha:** `jorge123`

### Como Testar

As políticas de RLS podem ser verificadas no Editor SQL do Supabase, utilizando a funcionalidade "Role: authenticated" e selecionando o usuário de teste para executar as consultas.

As Edge Functions podem ser testadas com uma ferramenta como o Thunder Client ou Postman, utilizando um token JWT gerado no arquivo 'obter-token.js' para o usuário acima e a chave `anon` do projeto,ja deixei elas escritas no arquivo para facilitar o teste.

---
_Projeto desenvolvido por **Jorge** como parte do processo seletivo._
