# Podcast Manager

### Nome do aplicativo

Podcast Manager

### Descrição

Um app ao estilo netflix, onde possa centralizar diferentes epsódios de podcasts separados por categorias

### Domínio

Podcast feitos em vídeo

### Features

- Listar os episódios em sessões de categorais
  - [Saúde, Fitness, Mentalidade, Humor, Jogos]
- Filtrar episódios por nome de podcasts

## Como

### Feature:

- Listar os episódios em sessões de categorais

### Como vou implementar:

Vou retornar em uma api rest para que consiga alimentar um frontend

- [Nome, Nome do episódio, Id do vídeo, Imagem de capa, O link, Categoria]

```js
    //Código em JavaScript
[
     {
        podcastName: "Flow",
        episode: "FABIO AKITA - Flow #588",
        videoID: "4c7pbOxYn_A"
        cover: "https://i.ytimg.com/vi/4c7pbOxYn_A/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4c7pbOxYn_A",
        category: ["ti"]
    },
    {
        outro episódio
    }
]
// Na URL do cover e do link existe um padrão, basta usar apenas o ID. 
```
