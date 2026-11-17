# Portal de Cursos

Aplicação React + Vite para navegação entre páginas e validação de formulário.

## Como executar

1. Instale as dependências: `npm install`
2. Inicie o projeto: `npm run dev`
3. Acesse a URL local exibida no terminal, normalmente `http://localhost:5173`

## Implementação

A navegação foi feita com `react-router`, usando `NavLink` e `Routes` para alternar entre `Início` e `Cadastro` sem recarregar a página.
Cada campo do formulário é controlado por `useState`, e os erros são gerados pela função `validar()`.
O usuário recebe mensagens claras quando nome, e-mail, senha, confirmação ou curso estiverem inválidos.
Se tudo estiver correto, o cadastro simulado é confirmado e o formulário é limpo.
