# 🎧 Podcast Manager

## 📌 Nome do Aplicativo
**Podcast Manager**

---

## ⚙️ Funcionalidades

- Listar episódios organizados por categorias:
  - Saúde
  - Fitness
  - Mentalidade
  - Humor
  - Jogos
- Filtrar episódios por nome do podcast

---

## 🛠️ Implementação

A aplicação fornece dados através de uma API REST, permitindo que um frontend consuma as informações.

### 📂 Estrutura dos Dados

```js
[
  {
    podcastName: "Flow",
    episode: "FABIO AKITA - Flow #588",
    videoID: "4c7pbOxYn_A",
    cover: "https://i.ytimg.com/vi/4c7pbOxYn_A/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4c7pbOxYn_A",
    category: ["ti"]
  },
  {
    outro episódio
  }
]
````

### 🔗 Observação

As propriedades `cover` e `link` seguem um padrão baseado no `videoID`.

---

## 🌐 Endpoints

### 📥 Listar episódios

```http
GET /episodes
```

### 🔎 Filtrar episódios por nome

```http
GET /episodes?p=nome-do-podcast
```

---

## 🧱 Arquitetura

* API REST
* Organização por camadas

---

## 💻 Tecnologias

* Node.js
* TypeScript
* TSX
* TSUP
* @types/node

---

## 📄 Licença

Este projeto está sob a licença MIT.
