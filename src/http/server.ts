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
    date: "2024/05/14",
    time: "09:00",
    author: "Artur Abreu",
  },
  {
    id: 2,
    category: "EDUCAÇÃO",
    title:
      "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
      summary: "Uma pesquisa do Datafolha revelou que, após o período de ensino remoto, 76% dos alunos necessitam de reforço na alfabetização. O estudo aponta os desafios enfrentados pela educação durante a pandemia e as estratégias necessárias para recuperar a aprendizagem.",
      content: [
        {
          type: "paragraph",
          text: "Uma recente pesquisa realizada pelo Datafolha revelou que 76% dos alunos precisam de reforço na alfabetização após o período de ensino remoto. Este dado alarmante destaca os desafios significativos enfrentados pela educação durante a pandemia.",
        },
        {
          type: "paragraph",
          text: "O ensino remoto, adotado como solução emergencial para a continuidade das aulas, apresentou diversas dificuldades. Muitos alunos não tiveram acesso adequado a recursos tecnológicos, o que comprometeu a qualidade da aprendizagem.",
        },
        {
          type: "paragraph",
          text: "A falta de interação presencial com professores e colegas também afetou o desenvolvimento das habilidades de leitura e escrita dos estudantes. A ausência de um ambiente estruturado e de suporte pedagógico direto tornou o processo de alfabetização mais desafiador.",
        },
        {
          type: "paragraph",
          text: "Para reverter esse cenário, especialistas sugerem a implementação de programas intensivos de reforço escolar. A criação de grupos de apoio e tutoria pode ajudar a suprir as lacunas deixadas pelo ensino remoto.",
        },
        {
          type: "paragraph",
          text: "Além disso, é essencial investir na formação continuada dos professores, proporcionando-lhes ferramentas e metodologias eficazes para lidar com as deficiências de aprendizagem identificadas.",
        },
        {
          type: "paragraph",
          text: "As escolas também precisam estabelecer parcerias com as famílias, incentivando a leitura e atividades educativas em casa. O envolvimento dos pais é crucial para o sucesso do processo de recuperação educacional.",
        },
        {
          type: "paragraph",
          text: "O estudo do Datafolha serve como um alerta para a necessidade urgente de ações coordenadas que garantam o direito à educação de qualidade para todos. Superar os desafios deixados pela pandemia é fundamental para o futuro acadêmico e profissional das novas gerações.",
        },
      ],
    image:
      "https://s3-alpha-sig.figma.com/img/4860/b62c/5f89d5f732924bb3a0b37dccc69459e2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GnRGIa6fjSVTdZh~b~Krxm1HJbaWHIHDNrE-S9YwnxANW-1AhywwKb5AXdciC5-yXMNEOhO6cpCtPcTF0OZQO6I8yOozhuoNKjwUVydTwc3BgGs7dl1Un2kpvkM5dtOqXdazzbYU5CLM5~dh3KdKctX3FeESXfHE-XJ0ftMjIrdpBanGmhmil0uvpJct5f~CJQcXt9MVq0fuamTxV0H6m5OttVKlqRHvIVgPPooL0~oJkpZoaB92L1paX9pQar7kRwlSvgNUHT9g7doe-Op-a-1S08WdkvwWMFQzGAPQR7eLs2JtDA5AaZqmKEWZZp1v5PgYKkmpVSn6JhuzAPAr0w__",
    date: "2024/05/12",
    time: "14:30",
    author: "Artur Abreu",
  },
  {
    id: 3,
    category: "DIVERSIDADES",
    title:
      "Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje",
    summary:
      "A Lotomania sorteou hoje um prêmio de R$ 5 milhões, trazendo emoção e expectativa para milhares de apostadores. Confira os números sorteados e saiba mais sobre como funciona este popular jogo de loteria.",

    content: [
      {
        type: "paragraph",
        text: "O sorteio da Lotomania aconteceu na noite de hoje, com um prêmio estimado em R$ 5 milhões. Muitos apostadores estavam na expectativa, aguardando os números sorteados para saber se seriam os novos milionários.",
      },
      {
        type: "paragraph",
        text: "A Lotomania é um dos jogos de loteria mais populares do Brasil, oferecendo grandes prêmios aos seus jogadores. A cada sorteio, milhares de pessoas fazem suas apostas na esperança de mudar suas vidas com o grande prêmio.",
      },
      {
        type: "paragraph",
        text: "O sorteio desta noite trouxe muita emoção e expectativa. Os números sorteados foram: 02, 05, 12, 18, 23, 29, 34, 38, 41, 45, 50, 54, 59, 63, 68, 71, 76, 80, 85 e 90. Agora, resta aguardar a verificação dos bilhetes para saber se houve algum ganhador.",
      },
      {
        type: "paragraph",
        text: "A Lotomania funciona de maneira simples: o jogador escolhe 50 números entre os 100 disponíveis e ganha prêmios se acertar 20, 19, 18, 17, 16, 15 ou nenhum número. As possibilidades de vitória são variadas, tornando o jogo ainda mais atraente.",
      },
      {
        type: "paragraph",
        text: "Além do prêmio principal, a Lotomania oferece outras categorias de premiação, que também podem resultar em valores consideráveis para os jogadores. Isso aumenta as chances de vitória e mantém o interesse pelo jogo sempre alto.",
      },
      {
        type: "paragraph",
        text: "Os ganhadores devem se apresentar em uma agência da Caixa Econômica Federal para reivindicar seus prêmios. É importante ter em mãos o bilhete premiado e um documento de identificação oficial.",
      },
      {
        type: "paragraph",
        text: "Para os que não ganharam, a esperança continua no próximo sorteio. A Lotomania realiza sorteios duas vezes por semana, oferecendo novas oportunidades para todos que desejam tentar a sorte novamente.",
      },
    ],
    image:
      "https://s3-alpha-sig.figma.com/img/21a6/9033/8c49079302a6944094664e80d3160112?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TwAuz4SldGR7BUK9ODNzxRKuVOP5I8xGMxPQYjm5TNj62ucEgjEA9dFiF7oPDL0SgWXa7MIqWj2Pww7lQdOLXhMt2jdQiqcDg6z2gEnXs5GMJH4Lyh~23Ku8uwsMFGL5Uz8Cn8ozOZqI0wrrSuyBDIZeZj8yXtpdFgG8RvwUhzNyDE8coF690cWEetHlS1lGA2~KBqgoujjf3eXaHh01Srn2sey~dqdGAoGlIx4dvL9Y6sJxW~eumXrQJ4cbpt~Y0txsaXy0f4UONuREREat0UH0UsaAUwDnbvZcDlRNjCbQ8LLnaHvCI4PdaVtb38wx0DtKc6-rURicUKnu5DPKsg__",
    date: "2024/05/10",
    time: "18:45",
    author: "Artur Abreu",
  },
];

const secondaryArticles = [
  {
    id: 4,
    category: "ECONOMIA",
    title:
      "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
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
    date: "2024/05/14",
    time: "10:15",
    author: "Artur Abreu",
  },
  {
    id: 5,
    category: "ECONOMIA",
    title:
      "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
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
    date: "2024/05/13",
    time: "09:00",
    author: "Artur Abreu",
  },
  {
    id: 6,
    category: "EDUCAÇÃO",
    title:
      "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
    summary: "Uma pesquisa do Datafolha revelou que, após o período de ensino remoto, 76% dos alunos necessitam de reforço na alfabetização. O estudo aponta os desafios enfrentados pela educação durante a pandemia e as estratégias necessárias para recuperar a aprendizagem.",
  content: [
    {
      type: "paragraph",
      text: "Uma recente pesquisa realizada pelo Datafolha revelou que 76% dos alunos precisam de reforço na alfabetização após o período de ensino remoto. Este dado alarmante destaca os desafios significativos enfrentados pela educação durante a pandemia.",
    },
    {
      type: "paragraph",
      text: "O ensino remoto, adotado como solução emergencial para a continuidade das aulas, apresentou diversas dificuldades. Muitos alunos não tiveram acesso adequado a recursos tecnológicos, o que comprometeu a qualidade da aprendizagem.",
    },
    {
      type: "paragraph",
      text: "A falta de interação presencial com professores e colegas também afetou o desenvolvimento das habilidades de leitura e escrita dos estudantes. A ausência de um ambiente estruturado e de suporte pedagógico direto tornou o processo de alfabetização mais desafiador.",
    },
    {
      type: "paragraph",
      text: "Para reverter esse cenário, especialistas sugerem a implementação de programas intensivos de reforço escolar. A criação de grupos de apoio e tutoria pode ajudar a suprir as lacunas deixadas pelo ensino remoto.",
    },
    {
      type: "paragraph",
      text: "Além disso, é essencial investir na formação continuada dos professores, proporcionando-lhes ferramentas e metodologias eficazes para lidar com as deficiências de aprendizagem identificadas.",
    },
    {
      type: "paragraph",
      text: "As escolas também precisam estabelecer parcerias com as famílias, incentivando a leitura e atividades educativas em casa. O envolvimento dos pais é crucial para o sucesso do processo de recuperação educacional.",
    },
    {
      type: "paragraph",
      text: "O estudo do Datafolha serve como um alerta para a necessidade urgente de ações coordenadas que garantam o direito à educação de qualidade para todos. Superar os desafios deixados pela pandemia é fundamental para o futuro acadêmico e profissional das novas gerações.",
    },
  ],
    image: "",
    date: "2024/05/11",
    time: "11:45",
    author: "Artur Abreu",
  },
  {
    id: 7,
    category: "DIVERSIDADES",
    title:
      "Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje",
    summary:
      "A Lotomania sorteou hoje um prêmio de R$ 5 milhões, trazendo emoção e expectativa para milhares de apostadores. Confira os números sorteados e saiba mais sobre como funciona este popular jogo de loteria.",

    content: [
      {
        type: "paragraph",
        text: "O sorteio da Lotomania aconteceu na noite de hoje, com um prêmio estimado em R$ 5 milhões. Muitos apostadores estavam na expectativa, aguardando os números sorteados para saber se seriam os novos milionários.",
      },
      {
        type: "paragraph",
        text: "A Lotomania é um dos jogos de loteria mais populares do Brasil, oferecendo grandes prêmios aos seus jogadores. A cada sorteio, milhares de pessoas fazem suas apostas na esperança de mudar suas vidas com o grande prêmio.",
      },
      {
        type: "paragraph",
        text: "O sorteio desta noite trouxe muita emoção e expectativa. Os números sorteados foram: 02, 05, 12, 18, 23, 29, 34, 38, 41, 45, 50, 54, 59, 63, 68, 71, 76, 80, 85 e 90. Agora, resta aguardar a verificação dos bilhetes para saber se houve algum ganhador.",
      },
      {
        type: "paragraph",
        text: "A Lotomania funciona de maneira simples: o jogador escolhe 50 números entre os 100 disponíveis e ganha prêmios se acertar 20, 19, 18, 17, 16, 15 ou nenhum número. As possibilidades de vitória são variadas, tornando o jogo ainda mais atraente.",
      },
      {
        type: "paragraph",
        text: "Além do prêmio principal, a Lotomania oferece outras categorias de premiação, que também podem resultar em valores consideráveis para os jogadores. Isso aumenta as chances de vitória e mantém o interesse pelo jogo sempre alto.",
      },
      {
        type: "paragraph",
        text: "Os ganhadores devem se apresentar em uma agência da Caixa Econômica Federal para reivindicar seus prêmios. É importante ter em mãos o bilhete premiado e um documento de identificação oficial.",
      },
      {
        type: "paragraph",
        text: "Para os que não ganharam, a esperança continua no próximo sorteio. A Lotomania realiza sorteios duas vezes por semana, oferecendo novas oportunidades para todos que desejam tentar a sorte novamente.",
      },
    ],
    image: "",
    date: "2024/05/10",
    time: "20:00",
    author: "Artur Abreu",
  },
  {
    id: 8,
    category: "ECONOMIA",
    title:
      "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
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
    date: "2024/05/13",
    time: "15:30",
    author: "Artur Abreu",
  },
  {
    id: 9,
    category: "ECONOMIA",
    title:
      "Quem não tiver valores a receber poderá ter nas próximas fases, diz BC",
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
    date: "2024/05/12",
    time: "08:00",
    author: "Artur Abreu",
  },
  {
    id: 10,
    category: "EDUCAÇÃO",
    title:
      "Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização",
    summary: "Uma pesquisa do Datafolha revelou que, após o período de ensino remoto, 76% dos alunos necessitam de reforço na alfabetização. O estudo aponta os desafios enfrentados pela educação durante a pandemia e as estratégias necessárias para recuperar a aprendizagem.",
  content: [
    {
      type: "paragraph",
      text: "Uma recente pesquisa realizada pelo Datafolha revelou que 76% dos alunos precisam de reforço na alfabetização após o período de ensino remoto. Este dado alarmante destaca os desafios significativos enfrentados pela educação durante a pandemia.",
    },
    {
      type: "paragraph",
      text: "O ensino remoto, adotado como solução emergencial para a continuidade das aulas, apresentou diversas dificuldades. Muitos alunos não tiveram acesso adequado a recursos tecnológicos, o que comprometeu a qualidade da aprendizagem.",
    },
    {
      type: "paragraph",
      text: "A falta de interação presencial com professores e colegas também afetou o desenvolvimento das habilidades de leitura e escrita dos estudantes. A ausência de um ambiente estruturado e de suporte pedagógico direto tornou o processo de alfabetização mais desafiador.",
    },
    {
      type: "paragraph",
      text: "Para reverter esse cenário, especialistas sugerem a implementação de programas intensivos de reforço escolar. A criação de grupos de apoio e tutoria pode ajudar a suprir as lacunas deixadas pelo ensino remoto.",
    },
    {
      type: "paragraph",
      text: "Além disso, é essencial investir na formação continuada dos professores, proporcionando-lhes ferramentas e metodologias eficazes para lidar com as deficiências de aprendizagem identificadas.",
    },
    {
      type: "paragraph",
      text: "As escolas também precisam estabelecer parcerias com as famílias, incentivando a leitura e atividades educativas em casa. O envolvimento dos pais é crucial para o sucesso do processo de recuperação educacional.",
    },
    {
      type: "paragraph",
      text: "O estudo do Datafolha serve como um alerta para a necessidade urgente de ações coordenadas que garantam o direito à educação de qualidade para todos. Superar os desafios deixados pela pandemia é fundamental para o futuro acadêmico e profissional das novas gerações.",
    },
  ],
    image: "",
    date: "2024/05/11",
    time: "14:00",
    author: "Artur Abreu",
  },
  {
    id: 11,
    category: "DIVERSIDADES",
    title:
      "Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje",
    summary:
      "A Lotomania sorteou hoje um prêmio de R$ 5 milhões, trazendo emoção e expectativa para milhares de apostadores. Confira os números sorteados e saiba mais sobre como funciona este popular jogo de loteria.",
    content: [
      {
        type: "paragraph",
        text: "O sorteio da Lotomania aconteceu na noite de hoje, com um prêmio estimado em R$ 5 milhões. Muitos apostadores estavam na expectativa, aguardando os números sorteados para saber se seriam os novos milionários.",
      },
      {
        type: "paragraph",
        text: "A Lotomania é um dos jogos de loteria mais populares do Brasil, oferecendo grandes prêmios aos seus jogadores. A cada sorteio, milhares de pessoas fazem suas apostas na esperança de mudar suas vidas com o grande prêmio.",
      },
      {
        type: "paragraph",
        text: "O sorteio desta noite trouxe muita emoção e expectativa. Os números sorteados foram: 02, 05, 12, 18, 23, 29, 34, 38, 41, 45, 50, 54, 59, 63, 68, 71, 76, 80, 85 e 90. Agora, resta aguardar a verificação dos bilhetes para saber se houve algum ganhador.",
      },
      {
        type: "paragraph",
        text: "A Lotomania funciona de maneira simples: o jogador escolhe 50 números entre os 100 disponíveis e ganha prêmios se acertar 20, 19, 18, 17, 16, 15 ou nenhum número. As possibilidades de vitória são variadas, tornando o jogo ainda mais atraente.",
      },
      {
        type: "paragraph",
        text: "Além do prêmio principal, a Lotomania oferece outras categorias de premiação, que também podem resultar em valores consideráveis para os jogadores. Isso aumenta as chances de vitória e mantém o interesse pelo jogo sempre alto.",
      },
      {
        type: "paragraph",
        text: "Os ganhadores devem se apresentar em uma agência da Caixa Econômica Federal para reivindicar seus prêmios. É importante ter em mãos o bilhete premiado e um documento de identificação oficial.",
      },
      {
        type: "paragraph",
        text: "Para os que não ganharam, a esperança continua no próximo sorteio. A Lotomania realiza sorteios duas vezes por semana, oferecendo novas oportunidades para todos que desejam tentar a sorte novamente.",
      },
    ],
    image: "",
    date: "2024/05/10",
    time: "19:30",
    author: "Artur Abreu",
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
