# Desafio de Automação de Testes
---

## ✅ Objetivo

Automatizar o fluxo completo de:

1. **Login**
2. **Navegação e "pesquisa"**
3. **Validação de produto**
4. **Adição ao carrinho e checkout**
5. **Finalização de pedido**

---

## 🛠 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

---

## 🧱 Estrutura do Projeto (Page Object Model - POM)

```
/cypress
  ├── /fixtures
  │     └── userData.json      # Dados de login, produto e checkout
  ├── /pages                   # Arquitetura POM
  │     ├── loginPage.js
  │     ├── productPage.js
  │     ├── cartPage.js
  │     └── checkoutPage.js
  └── /e2e
        ├── login.spec.cy.js
        ├── product.spec.cy.js
        ├── cart.spec.cy.js
        ├── checkout.spec.cy.js
        └── all_tests.spec.cy.js
```

---

## 📦 Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <nome-do-projeto>
   ```

2. Instale as dependências:
   ```bash
   npm install

   ```

> Necessario ter o **Node** instalado

3. Execute o Cypress:
   - Modo interativo:
     ```bash
     npx cypress open
     ```
   - Modo headless (CLI):
     ```bash
     npx cypress run
     ```

---

## 👤 Credenciais de Acesso

As credenciais padrão utilizadas são:
```json
{
  "userName": "standard_user",
  "password": "secret_sauce"
}
```

## 📌 Suposições e Decisões

- **Pesquisa**: o site não possui barra de busca. A pesquisa foi simulada por meio da seleção direta do produto pelo nome.
- **Validação**: a verificação do produto inclui nome, preço e descrição, de acordo com os dados fornecidos.
- **Checkout**: todos os campos são preenchidos com dados válidos e o fluxo segue até a tela de finalização com sucesso.

---

## ✅ Cobertura de Testes

- `login.spec.cy.js`: Automatização de validação login com credenciais válidas
- `product.spec.cy.js`: Automatização até a seleção e validação de produto
- `cart.spec.cy.js`: Automatização até a adição ao carrinho e transição para checkout
- `checkout.spec.cy.js`: Automatização até o preenchimento do formulário e finalização de pedido
- `all_tests.spec.cy.js`: Automatização completa do fluxo

---

## 📄 Licença

Este projeto é apenas para fins de avaliação técnica.
