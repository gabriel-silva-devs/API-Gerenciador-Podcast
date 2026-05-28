# 🎧 Podcast Manager

Uma API REST em Node.js para gerenciar e filtrar episódios de podcasts.

---

## Índice

- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Scripts](#-scripts)
- [Endpoints](#-endpoints)
- [Estrutura dos Dados](#-estrutura-dos-dados)
- [Arquitetura](#-arquitetura)
- [Licença](#-licença)

---

## Funcionalidades

- Listar todos os episódios de podcasts disponíveis
- Filtrar episódios pelo nome do podcast

---

## Tecnologias

| Tecnologia | Versão | Descrição |
|---|---|---|
| [Node.js](https://nodejs.org/) | ^18 | Runtime JavaScript |
| [TypeScript](https://www.typescriptlang.org/) | ^6.0.3 | Tipagem estática |
| [tsx](https://github.com/privatenumber/tsx) | ^4.21.0 | Execução de TypeScript no Node |
| [tsup](https://tsup.egoist.dev/) | ^8.5.1 | Bundler para TypeScript |
| [@types/node](https://www.npmjs.com/package/@types/node) | ^25.6.0 | Tipos do Node.js |

---

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/api-gerenciador-podcast.git

# Acesse a pasta do projeto
cd api-gerenciador-podcast

# Instale as dependências
npm install
```

Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias:

```env
PORT=3000
```

---

## Scripts

| Comando | Descrição |
|---|---|
| `npm run start:dev` | Inicia o servidor em modo desenvolvimento (com `.env`) |
| `npm run start:watch` | Inicia com hot-reload (recarrega ao salvar) |
| `npm run dist` | Gera o build de produção com `tsup` |
| `npm run start:dist` | Gera o build e inicia o servidor compilado |

---

## Endpoints

### Listar todos os episódios

```http
GET /api/list
```

**Resposta de exemplo:**

```json
[
  {
    "podcastName": "Flow",
    "episode": "FABIO AKITA - Flow #588",
    "videoID": "4c7pbOxYn_A",
    "cover": "https://i.ytimg.com/vi/4c7pbOxYn_A/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4c7pbOxYn_A",
    "category": ["ti"]
  }
]
```

---

### Filtrar episódios por nome do podcast

```http
GET /api/filter?p={nome-do-podcast}
```

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `p` | `string` | ✅ | Nome do podcast a ser filtrado |

**Exemplo de requisição:**

```http
GET /api/filter?p=flow
```

---

## Estrutura dos Dados

Cada episódio retornado pela API segue o seguinte modelo:

```ts
{
  podcastName: string;   // Nome do podcast
  episode: string;       // Título do episódio
  videoID: string;       // ID do vídeo no YouTube
  cover: string;         // URL da thumbnail (gerada a partir do videoID)
  link: string;          // URL do vídeo (gerada a partir do videoID)
  category: string[];    // Categorias do episódio (ex: ["ti", "saúde"])
}
```

> **Observação:** As propriedades `cover` e `link` seguem um padrão baseado no `videoID`:
> - Cover: `https://i.ytimg.com/vi/{videoID}/maxresdefault.jpg`
> - Link: `https://www.youtube.com/watch?v={videoID}`

---

## Arquitetura

O projeto segue uma organização em camadas:

```
src/
├── server.ts         # Ponto de entrada da aplicação
├── routes/           # Definição das rotas
├── controllers/      # Lógica de controle das requisições
├── services/         # Regras de negócio
└── repositories/     # Acesso aos dados
```

---

## Licença

Este projeto está sob a licença **ISC**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
