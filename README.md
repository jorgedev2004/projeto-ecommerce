# Teste Técnico: Backend de E-commerce com Supabase

Este repositório contém o código-fonte e a documentação para o teste técnico de desenvolvimento de um backend de e-commerce utilizando a plataforma Supabase.

O projeto foi desenvolvido seguindo todos os requisitos solicitados, incluindo a modelagem do banco de dados, implementação de regras de segurança e criação de automações com Functions.

## 🚀 Funcionalidades Implementadas

- [x] **Criação de Tabelas:** Definição do esquema de banco de dados com tabelas para `clientes`, `produtos`, `pedidos` e `pedido_itens`.
- [x] **Row-Level Security (RLS):** Implementação de políticas de segurança para garantir que os clientes só possam acessar e modificar seus próprios dados e pedidos.
- [x] **Funções de Banco de Dados:** Criação de funções SQL (`plpgsql`) para automatizar processos, como `calcular_total_pedido`.
- [x] **Views:** Desenvolvimento de uma `VIEW` (`pedidos_detalhados`) para simplificar a consulta de dados consolidados de pedidos.
- [x] **Edge Functions:** Implementação de duas Edge Functions em Deno/TypeScript:
    - `enviar-confirmacao`: Simula o envio de um e-mail de confirmação de pedido.
    - `exportar-pedido-csv`: Gera e retorna um arquivo CSV com os detalhes de um pedido específico.

## 🛠️ Tecnologias Utilizadas

- **Plataforma:** Supabase
- **Banco de Dados:** PostgreSQL
- **Segurança:** Row-Level Security (RLS) e JWT
- **Backend (Serverless):** Deno (Supabase Edge Functions)
- **Linguagens:** SQL, PL/pgSQL, TypeScript
- **Controle de Versão:** Git e GitHub

## 🔑 Acesso e Informações para Teste

Para avaliar o projeto no ambiente da Supabase, utilize as seguintes informações:

* **Link do Projeto Supabase:** `https://supabase.com/dashboard/project/uzzafhiktdxrcuujyfev` (COLE O SEU ID CORRETO AQUI)
* **Credenciais do Usuário de Teste:**
    * **E-mail:** `teste@email.com`
    * **Senha:** `teste123321`

### Como Testar

As políticas de RLS podem ser verificadas no Editor SQL do Supabase, utilizando a funcionalidade "Role: authenticated" e selecionando o usuário de teste para executar as consultas nas tabelas e views.

As Edge Functions foram testadas e podem ser chamadas através de uma ferramenta como o Thunder Client/Postman, utilizando um token JWT gerado para o usuário acima e a chave `anon` do projeto.

---
_Projeto desenvolvido por Jorge (jorgedev2004) como parte do processo seletivo._