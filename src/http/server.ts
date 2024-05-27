import fastify from "fastify";
import cors from "@fastify/cors";

const app = fastify();

app.register(cors);

const mainArticles = [
  {
    id: 1,
    category: "ECONOMIA",
    title:
      "Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC",
    summary:
      "Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os clientes tenham a receber cerca de R$ 8 bilhões.",
    content: [
      {
        type: "paragraph",
        text: "Banco Central libera consulta a dinheiro esquecido em bancos",
      },
      {
        type: "paragraph",
        text: "O Banco Central informou nesta segunda-feira (14) que quem não tiver valores a receber nesta etapa das consultas ao novo site de consulta aos recursos 'esquecidos' nos bancos poderá eventualmente ter nas próximas fases do sistema.",
      },
      {
        type: "paragraph",
        text: "Muitos clientes que acessam o sistema têm recebido a mensagem para retornar à consulta em 2 de maio (veja na imagem mais abaixo).",
      },
      {
        type: "quote",
        text: '"Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases", informou o BC ao ser questionado pelo g1.',
      },
      {
        type: "paragraph",
        text: "Isso acontece porque, ao todo, os bancos têm R$ 8 bilhões a devolver aos clientes. Mas, nesta primeira fase, foram abertas consultas referentes à metade, R$ 4 bilhões.",
      },
      {
        type: "paragraph",
        text: "Banco Central libera consulta de dinheiro ‘esquecido’ em bancos: saiba como fazer",
      },
      {
        type: "paragraph",
        text: "Em 2 de maio, as consultas a uma nova fase serão abertas. O BC não informou, no entanto, se todos os R$ 4 bilhões restantes serão liberados para consultas nesta segunda fase. Em janeiro, no entanto, o BC afirmou que todos os recursos seriam liberados 'ao longo de 2022'.",
      },
      {
        type: "paragraph",
        text: "Página do BC informa que cidadão sem valores a receber atualmente poderá fazer nova consulta a partir de maio.",
      },
    ],
    image: "",
  },
  {
    id: 2,
    category: "EDUCAÇÃO",
    title:
      "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
    summary: "Content of the main education article",
    content: [
      {
        type: "paragraph",
        text: "Full content of the main education article.",
      },
    ],
    image:
      "https://s3-alpha-sig.figma.com/img/4860/b62c/5f89d5f732924bb3a0b37dccc69459e2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GnRGIa6fjSVTdZh~b~Krxm1HJbaWHIHDNrE-S9YwnxANW-1AhywwKb5AXdciC5-yXMNEOhO6cpCtPcTF0OZQO6I8yOozhuoNKjwUVydTwc3BgGs7dl1Un2kpvkM5dtOqXdazzbYU5CLM5~dh3KdKctX3FeESXfHE-XJ0ftMjIrdpBanGmhmil0uvpJct5f~CJQcXt9MVq0fuamTxV0H6m5OttVKlqRHvIVgPPooL0~oJkpZoaB92L1paX9pQar7kRwlSvgNUHT9g7doe-Op-a-1S08WdkvwWMFQzGAPQR7eLs2JtDA5AaZqmKEWZZp1v5PgYKkmpVSn6JhuzAPAr0w__",
  },
  {
    id: 3,
    category: "DIVERSIDADES",
    title:
      "Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje",
    summary: "Content of the main diversity article",
    content: [
      {
        type: "paragraph",
        text: "Full content of the main diversity article.",
      },
    ],
    image:
      "https://s3-alpha-sig.figma.com/img/21a6/9033/8c49079302a6944094664e80d3160112?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TwAuz4SldGR7BUK9ODNzxRKuVOP5I8xGMxPQYjm5TNj62ucEgjEA9dFiF7oPDL0SgWXa7MIqWj2Pww7lQdOLXhMt2jdQiqcDg6z2gEnXs5GMJH4Lyh~23Ku8uwsMFGL5Uz8Cn8ozOZqI0wrrSuyBDIZeZj8yXtpdFgG8RvwUhzNyDE8coF690cWEetHlS1lGA2~KBqgoujjf3eXaHh01Srn2sey~dqdGAoGlIx4dvL9Y6sJxW~eumXrQJ4cbpt~Y0txsaXy0f4UONuREREat0UH0UsaAUwDnbvZcDlRNjCbQ8LLnaHvCI4PdaVtb38wx0DtKc6-rURicUKnu5DPKsg__",
  },
];

const secondaryArticles = [
  {
    id: 4,
    category: "ECONOMIA",
    title:
      "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
    summary: "Content of secondary economic article",
    content: [
      {
        type: "paragraph",
        text: "Full content of secondary economic article.",
      },
    ],
    image: "",
  },
  {
    id: 5,
    category: "ECONOMIA",
    title:
      "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
    summary: "Content of secondary economic article",
    content: [
      {
        type: "paragraph",
        text: "Full content of secondary economic article.",
      },
    ],
    image: "",
  },
  {
    id: 6,
    category: "EDUCAÇÃO",
    title:
      "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
    summary: "Content of secondary education article",
    content: [
      {
        type: "paragraph",
        text: "Full content of secondary education article.",
      },
    ],
    image: "",
  },
  {
    id: 7,
    category: "DIVERSIDADES",
    title:
      "Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje",
    summary: "Content of secondary diversity article",
    content: [
      {
        type: "paragraph",
        text: "Full content of secondary diversity article.",
      },
    ],
    image: "",
  },
  {
    id: 8,
    category: "ECONOMIA",
    title:
      "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
    summary: "Content of secondary economic article",
    content: [
      {
        type: "paragraph",
        text: "Full content of secondary economic article.",
      },
    ],
    image: "",
  },
  {
    id: 9,
    category: "ECONOMIA",
    title:
      "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
    summary: "Content of secondary economic article",
    content: [
      {
        type: "paragraph",
        text: "Full content of secondary economic article.",
      },
    ],
    image: "",
  },
  {
    id: 10,
    category: "EDUCAÇÃO",
    title:
      "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
    summary: "Content of secondary education article",
    content: [
      {
        type: "paragraph",
        text: "Full content of secondary education article.",
      },
    ],
    image: "",
  },
  {
    id: 11,
    category: "DIVERSIDADES",
    title:
      "Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje",
    summary: "Content of secondary diversity article",
    content: [
      {
        type: "paragraph",
        text: "Full content of secondary diversity article.",
      },
    ],
    image: "",
  },
];

app.get("/articles/main", async (request, reply) => {
  return { articles: mainArticles };
});

app.get("/articles/secondary", async (request, reply) => {
  return { articles: secondaryArticles };
});

app.get("/articles/:id", async (request, reply) => {
  const { id } = request.params as { id: string };
  const article = mainArticles
    .concat(secondaryArticles)
    .find((a) => a.id === parseInt(id));
  if (article) {
    return { article };
  } else {
    reply.status(404).send({ error: "Article not found" });
  }
});

app.listen(
  { host: "0.0.0.0", port: process.env.PORT ? Number(process.env.PORT) : 3000 },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);
