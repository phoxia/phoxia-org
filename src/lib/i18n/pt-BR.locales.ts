import type { LocaleShape } from "./types";

const ptBR: LocaleShape = {
  nav: {
    projects: "Projetos",
    blog: "Blog",
    transparency: "Transparência",
    skipToContent: "Ir para o conteúdo",
  },
  hero: {
    eyebrow: "Código aberto · AGPLv3 · Transparente",
    title: "Software pode ser justo.",
    subtitle:
      "Phoxia é um ecossistema de código aberto comprometido em devolver o máximo de valor possível para os desenvolvedores, mantendo um ecossistema sustentável e transparente. Sem termos de VC. Sem extração.",
    ctaPrimary: "Explorar projetos",
    ctaSecondary: "Nossos princípios",
    luxLabel: "Lux, o mascote da Phoxia",
  },
  features: {
    title: "Construído diferente",
    fairRevenue: {
      title: "Desenvolvedores primeiro",
      desc: "Cada decisão começa pelo impacto nos desenvolvedores. A Phoxia está comprometida em devolver o máximo de valor possível para a comunidade: via grants, bounties e programas feitos por devs, para devs.",
    },
    transparency: {
      title: "Transparência por padrão",
      desc: "Receita, custos e desembolsos são públicos em /transparency. Não é blog post: dados reais sobre receita do ecossistema, distribuições, custos de infra e investimentos comunitários.",
    },
    openSource: {
      title: "AGPLv3 sempre",
      desc: "Todo código é aberto. Faça um fork, audite, rode você mesmo. Sem regras ocultas, sem lock-in.",
    },
  },
  projects: {
    title: "O ecossistema",
    subtitle: "Ferramentas independentes, princípios compartilhados.",
    statusLaunching: "Lançando em breve",
    statusBuilding: "Em construção",
    statusUpcoming: "Em breve",
    viewOnGithub: "Ver no GitHub",
    idlefair: {
      name: "idle-fair",
      desc: "Rede de anúncios para agentes de IA. Ganhe com o tempo ocioso do seu agente: uma mensagem no status line enquanto ele pensa.",
    },
    phoxiaid: {
      name: "PhoxiaID",
      desc: "SSO com Passkeys + TOTP. JWT RS256, PKCE, JWKS endpoint. O backbone de autenticação de todos os projetos Phoxia.",
    },
    watch: {
      name: "Watch",
      desc: "Status pages, alertas de uptime e heartbeats para crons. Leve, self-hosted, sem telemetria de terceiros.",
    },
    tools: {
      name: "Tools",
      desc: "45+ ferramentas gratuitas: diff de JSON, testador de regex, base64, UUID e muito mais. Zero anúncios, a menos que você queira.",
    },
    bounty: {
      name: "Bounty",
      desc: "Board de bounties open source. Mantenedores postam issues com recompensa; contribuidores recebem ao fazer merge.",
    },
  },
  principles: {
    title: "Nossos princípios",
    subtitle: "Os compromissos que guiam cada decisão que tomamos.",
    p1: { title: "Desenvolvedores primeiro", desc: "Cada decisão começa pelo impacto nos desenvolvedores." },
    p2: { title: "Transparência por padrão", desc: "Receita, custos e alocações são sempre públicos." },
    p3: { title: "Código aberto sempre que possível", desc: "AGPLv3. Faça um fork, audite, rode você mesmo." },
    p4: { title: "Crescimento sustentável", desc: "Saúde do ecossistema a longo prazo sobre lucro imediato." },
    p5: { title: "Segurança e privacidade por design", desc: "Não é um add-on, está construído desde o início." },
    p6: { title: "Participação da comunidade importa", desc: "Contribuidores moldam a direção." },
    cta: "Ver nosso relatório de transparência",
  },
  transparencyPage: {
    eyebrow: "Livros abertos",
    title: "Transparência",
    subtitle:
      "Todo real que passa pela Phoxia tem uma justificativa pública. Sem ledger oculto.",
    badgeLabel: "Transparente",
    badgeValue: "Livros abertos · Comunidade primeiro · AGPLv3",
    revenueTitle: "Breakdown do ecossistema",
    revenueComingSoon: "Dados ao vivo em breve.",
    categories: {
      totalRevenue: {
        label: "Receita total do ecossistema",
        desc: "Todos os produtos combinados.",
      },
      distributed: {
        label: "Distribuído para desenvolvedores",
        desc: "Bounties, grants e programas comunitários.",
      },
      infrastructure: {
        label: "Custos de infraestrutura",
        desc: "Servidores, banda, armazenamento e CDN.",
      },
      legal: {
        label: "Custos jurídicos e contábeis",
        desc: "Compliance, auditoria e assessoria jurídica.",
      },
      paymentFees: {
        label: "Taxas de processamento de pagamento",
        desc: "Stripe e custos de provedores de pagamento.",
      },
      openSourceGrants: {
        label: "Grants e recompensas de PR",
        desc: "Pagamentos diretos a contribuidores e grants a mantenedores.",
      },
      communityInvestments: {
        label: "Investimentos comunitários",
        desc: "Eventos, patrocínios e educação.",
      },
      strategicReserve: {
        label: "Reserva estratégica",
        desc: "Buffer para estabilidade e crescimento de longo prazo do ecossistema.",
      },
    },
    reportsTitle: "Relatórios mensais",
    reportsSubtitle: "Breakdowns históricos publicados mensalmente.",
    reportsEmpty: "Nenhum relatório publicado ainda.",
    principlesTitle: "Nosso compromisso",
    principle1:
      "A Phoxia está comprometida em devolver o máximo de valor possível para os desenvolvedores, mantendo um ecossistema sustentável e transparente.",
    principle2:
      "Todo real retido pela plataforma tem uma justificativa clara e pública listada acima.",
    principle3:
      "Cada contribuição para a Phoxia ajuda a financiar desenvolvedores, infraestrutura, iniciativas open source e o crescimento de longo prazo do ecossistema.",
    ctaTitle: "Construa algo transparente",
    ctaGithub: "Org no GitHub",
  },
  projectsPage: {
    eyebrow: "O ecossistema",
    title: "Todos os projetos",
    subtitle:
      "Cada ferramenta que construímos vem com o mesmo compromisso: AGPLv3, transparência por padrão, orientado pela comunidade.",
    revealedSection: "Disponível agora",
    revealedSubtitle: "Esses projetos estão no ar ou em desenvolvimento ativo.",
    classifiedSection: "No pipeline",
    classifiedSubtitle: "Mais ferramentas estão chegando. Ainda não podemos dizer muito.",
    classifiedBadge: "CLASSIFICADO",
    classifiedNotify: "Siga @phoxia_org para atualizações",
    filterAll: "Todos",
    filterBuilding: "Em construção",
    filterUpcoming: "Em breve",
    filterClassified: "Classificados",
    ctaTitle: "Construa algo justo",
    ctaButton: "Entrar no ecossistema",
  },
  cta: {
    title: "Entre no ecossistema",
    subtitle:
      "Tudo que construímos é open source, e tudo que ganhamos é público. Acompanhe, contribua com código ou simplesmente nos mantenha honestos.",
    github: "Org no GitHub",
    docs: "Ver transparência",
  },
  footer: {
    tagline: "Código aberto. Transparente. Comunidade primeiro.",
    links: {
      projects: "Projetos",
      blog: "Blog",
      transparency: "Transparência",
      contact: "Contato",
      privacy: "Privacidade",
      terms: "Termos",
      github: "GitHub",
      discord: "Discord",
    },
    legal: "AGPLv3 · phoxia.org",
  },
  blog: {
    title: "Blog",
    subtitle: "Atualizações, decisões e pensamentos em voz alta.",
    readMore: "Ler post",
    writtenBy: "por",
    backToBlog: "← Voltar ao blog",
    minRead: "min de leitura",
    empty: "Nenhum post ainda.",
  },
  privacyPage: { title: "Política de Privacidade" },
  termsPage: { title: "Termos de Uso" },
  contactPage: {
    title: "Contato",
    subtitle: "Fale por e-mail ou entre na comunidade pelo Discord.",
    emailSection: "E-mail",
    discordSection: "Comunidade",
    discordDesc: "Entre no servidor do Discord da Phoxia para conversar, tirar dúvidas e acompanhar o que está sendo construído.",
    joinServer: "Entrar no servidor",
    emails: {
      general: { label: "Geral", desc: "Perguntas, ideias e tudo mais." },
      privacy: { label: "Privacidade", desc: "Solicitações de dados e questões de privacidade." },
      security: { label: "Segurança", desc: "Relatos de vulnerabilidade e questões de segurança." },
    },
  },
  common: {
    toggleTheme: "Alternar modo de cor",
    toggleLang: "Mudar idioma",
    dark: "Escuro",
    light: "Claro",
    system: "Sistema",
    tocLabel: "Conteúdo",
  },
};

export default ptBR;
