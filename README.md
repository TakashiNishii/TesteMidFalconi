# Desafio Técnico Fullstack - Gerenciamento de Usuários

Este projeto é uma aplicação fullstack desenvolvida como parte de um desafio técnico, implementando um sistema de gerenciamento de usuários e perfis.

## 🚀 Tecnologias Utilizadas

- **Backend**: NestJS com TypeScript
- **Frontend**: Next.js com TypeScript
- **Armazenamento**: Dados mockados em memória

## 📋 Funcionalidades Implementadas

- ✅ CRUD completo de usuários
- ✅ Ativação/desativação de usuários
- ✅ Busca de usuário por ID
- ✅ Filtro de usuários por perfil
- ✅ Relacionamento entre Usuários e Perfis

## 🛠️ Como Executar o Projeto

### Backend

1. Entre no diretório do backend:

```bash
cd FalconiBackend
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor:

```bash
npm run start:dev
```

O backend estará disponível em `http://localhost:3001`

### Frontend

1. Entre no diretório do frontend:

```bash
cd FalconiFrontend
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

O frontend estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
├── FalconiBackend/     # API REST com NestJS
└── FalconiFrontend/    # Interface com Next.js
```

## 🔍 Decisões Técnicas

- Utilização de TypeScript para garantir tipagem estática e melhor manutenibilidade
- NestJS para o backend, oferecendo uma estrutura robusta e escalável
- Next.js para o frontend, proporcionando uma experiência de desenvolvimento moderna
- Dados mockados em memória para simplicidade e rapidez no desenvolvimento

## 🔄 Possíveis Melhorias

1. Implementação de autenticação e autorização
2. Adição de testes unitários e de integração
3. Persistência de dados com banco de dados
4. Implementação de cache
5. Adição de documentação com Swagger
6. Implementação de validação de dados mais robusta
7. Adição de logging e monitoramento
8. Implementação de CI/CD

## 📝 Licença

Este projeto está sob a licença MIT.
