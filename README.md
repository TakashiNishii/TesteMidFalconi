# Desafio Técnico Fullstack - Gerenciamento de Usuários

Este projeto é uma aplicação fullstack desenvolvida como parte de um desafio técnico, implementando um sistema de gerenciamento de usuários e perfis.

## 🚀 Tecnologias Utilizadas

- **Backend**: NestJS com TypeScript
- **Frontend**: Next.js com TypeScript
- **Armazenamento**: Dados mockados em memória
- **Documentação**: Swagger
- **Estilização**: Tailwind CSS

## 📋 Funcionalidades Implementadas

### Gerenciamento de Usuários

- ✅ Criação de usuários
- ✅ Edição de usuários
- ✅ Remoção de usuários
- ✅ Listagem de usuários
- ✅ Ativação/desativação de usuários
- ✅ Busca de usuário por ID
- ✅ Filtro de usuários por perfil

### Gerenciamento de Perfis

- ✅ Criação de perfis
- ✅ Listagem de perfis
- ✅ Remoção de perfis
- ✅ Busca de perfil por ID

### Relacionamentos

- ✅ Relacionamento entre Usuários e Perfis
- ✅ Validação de existência de perfil ao criar/editar usuário

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

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
A documentação da API estará disponível em `http://localhost:3001/api`

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
│   ├── src/
│   │   ├── users/     # Módulo de usuários
│   │   ├── profiles/  # Módulo de perfis
│   │   └── interfaces/# Interfaces TypeScript
│   └── ...
└── FalconiFrontend/    # Interface com Next.js
    ├── src/
    │   ├── app/       # Páginas da aplicação
    │   ├── components/# Componentes React
    │   └── lib/       # Utilitários e configurações
    └── ...
```

## 🔍 Decisões Técnicas

### Backend

- Utilização do NestJS para uma estrutura robusta e escalável
- Implementação de DTOs para validação de dados
- Documentação automática com Swagger
- Tratamento de erros consistente
- Separação clara de responsabilidades (Controllers, Services, Modules, DTOs)

### Frontend

- Next.js para uma experiência de desenvolvimento moderna
- Tailwind CSS para estilização ágil e responsiva
- DaisyUI para componentes acessíveis
- Componentes reutilizáveis e modulares
- Context API para gerenciamento de estado
- Tipagem forte com TypeScript
- Manipulação de Cookies com Cookies.js

### Arquitetura

- API RESTful seguindo as melhores práticas
- Dados mockados em memória para simplicidade
- Relacionamentos entre entidades mantidos mesmo sem persistência
- Status codes apropriados para cada operação

## 🔄 Possíveis Melhorias

1. **Segurança**

   - Implementação de autenticação e autorização
   - Validação mais robusta de dados
   - Proteção contra ataques comuns

2. **Performance**

   - Implementação de cache
   - Otimização de consultas
   - Paginação de resultados

3. **Persistência**

   - Integração com banco de dados
   - Migrations e seeds
   - Backup e recuperação de dados

4. **Qualidade**

   - Testes unitários e de integração
   - CI/CD pipeline
   - Logging e monitoramento

5. **UX/UI**

   - Animações e transições
   - Temas claro/escuro

## 📝 Licença

Este projeto está sob a licença MIT.
