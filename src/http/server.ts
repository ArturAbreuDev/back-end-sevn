import fastify from 'fastify'

const app = fastify()

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
  },
  {
    id: 5,
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
  },
  {
    id: 6,
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
  },
];



app.get("/articles/main", async (request, reply) => {
  return { articles: mainArticles };
});

app.get("/articles/secondary", async (request, reply) => {
  return { articles: secondaryArticles };
});

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});