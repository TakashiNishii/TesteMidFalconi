# Backend Falconi - Teste Técnico

Este é o backend do teste técnico Falconi, uma API RESTful para gerenciamento de usuários e perfis.

## Funcionalidades Implementadas

- CRUD completo de usuários
- Ativação/desativação de usuários
- Busca de usuário por ID
- Filtro de usuários por perfil
- Gerenciamento básico de perfis

## Tecnologias Utilizadas

- NestJS
- TypeScript
- Class Validator
- Swagger UI

## Como Rodar o Projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run start:dev
```

O servidor estará rodando em `http://localhost:3001`

A documentação Swagger estará disponível em `http://localhost:3001/api`

## Estrutura do Projeto

```
src/
├── interfaces/     # Interfaces TypeScript
├── users/         # Módulo de usuários
│   ├── dto/       # Data Transfer Objects
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── profiles/      # Módulo de perfis
│   ├── dto/
│   ├── profiles.controller.ts
│   ├── profiles.service.ts
│   └── profiles.module.ts
├── app.module.ts  # Módulo principal
└── main.ts       # Ponto de entrada da aplicação
```

## Decisões Técnicas

1. **Armazenamento em Memória**: Conforme solicitado, os dados são armazenados em memória usando arrays.

2. **Validação de Dados**: Utilizamos class-validator para garantir a integridade dos dados recebidos.

3. **Documentação**: Implementamos Swagger UI para documentação interativa da API.

4. **Modularização**: O código está organizado em módulos separados para usuários e perfis.

## Pontos de Melhoria

1. **Persistência**: Implementar um banco de dados real.
2. **Autenticação**: Adicionar sistema de autenticação e autorização.
3. **Testes**: Adicionar testes unitários e de integração.
4. **Validações**: Adicionar mais validações de negócio.
5. **Logs**: Implementar sistema de logs.
6. **Cache**: Adicionar sistema de cache para melhorar performance.
