# Frontend - Gerenciamento de Usuários e Perfis

Interface web desenvolvida com Next.js para o gerenciamento de usuários e perfis, consumindo a API REST do backend.

## 🚀 Tecnologias

- **Framework**: Next.js 14
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Gerenciamento de Estado**: Context API
- **Componentes**: DaisyUI

## 📋 Funcionalidades

### Usuários

- Criação de novos usuários
- Edição de usuários existentes
- Remoção de usuários
- Ativação/desativação de usuários
- Filtro por perfil
- Busca por ID

### Perfis

- Listagem de perfis
- Criação de novos perfis
- Remoção de perfis
- Visualização de detalhes

## 🛠️ Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Backend rodando em `http://localhost:3001`

### Instalação

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas da aplicação
│   ├── page.tsx           # Página inicial
│   ├── sign-in/           # Página de login
│   └── sign-up/           # Página de cadastro
├── components/            # Componentes React
│   ├── common/           # Componentes compartilhados
│   ├── sign-in/          # Componentes da página de login
│   └── sign-up/          # Componentes da página de cadastro
├── contexts/             # Contextos React
│   └── filter-context.tsx            # Contexto de filtro
└── lib/                  # Utilitários e configurações
    └── utils/           # Funções utilitárias
```

## 🔍 Decisões Técnicas

### Arquitetura

- Utilização do App Router do Next.js para roteamento
- Componentes modulares e reutilizáveis
- Separação clara de responsabilidades
- Tipagem forte com TypeScript

### UI/UX

- Design responsivo com Tailwind CSS
- Componentes acessíveis com DaisyUI
- Feedback visual para ações do usuário
- Validação de formulários em tempo real

### Estado

- Context API para gerenciamento de estado dos filtros
- Manipulação de Cookies com Next.js

### Performance

- Otimização de imagens com Next.js
- Code splitting automático

## 🔄 Possíveis Melhorias

1. **Performance**

   - Implementação de cache
   - Divisão de componentes SSR e CSR

2. **UX/UI**

   - Animações de transição
   - Feedback de loading
   - Mensagens de erro mais detalhadas
   - Responsividade

3. **Acessibilidade**

   - Contraste adequado

## 📝 Licença

Este projeto está sob a licença MIT.
