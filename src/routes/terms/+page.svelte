<script lang="ts">
  import LegalPage from "$lib/components/legal-page.svelte";
  import { Scale } from "$lib/icons";
  import { t, getLang } from "$lib/i18n/i18n.svelte";

  let locale = $derived(t());
  let lang = $derived(getLang());

  type Section = { id: string; title: string; content: string };

  const enSections: Section[] = [
    {
      id: "about",
      title: "1. About phoxia.org",
      content:
        "phoxia.org is the public institutional website of Phoxia, an open-source software " +
        "collective building transparent and useful tools, for developers and general audiences alike. The website provides information about " +
        "Phoxia's projects, principles, and transparency reports.\n\n" +
        "phoxia.org does not offer paid services, subscriptions, or user accounts. " +
        "Phoxia's individual software projects each have their own terms and license agreements.",
    },
    {
      id: "acceptable-use",
      title: "2. Acceptable use",
      content:
        "You may use phoxia.org for any lawful purpose. You may not:\n\n" +
        "Attempt to gain unauthorized access to any server or system associated with phoxia.org.\n" +
        "Interfere with the website's availability (e.g., denial-of-service attacks).\n" +
        "Use automated tools to scrape or index the website in ways that degrade performance " +
        "for other users.\n" +
        "Impersonate Phoxia or its contributors in any communication.\n" +
        "Use phoxia.org to distribute malware, spam, or illegal content.",
    },
    {
      id: "intellectual-property",
      title: "3. Intellectual property",
      content:
        "Source code of phoxia.org is licensed under the GNU Affero General Public License v3.0 " +
        "(AGPLv3). You may use, study, modify, and distribute it under the terms of that license. " +
        "The full license text is available in our GitHub repository.\n\n" +
        "Written content (blog posts, documentation) is licensed under Creative Commons " +
        "Attribution 4.0 International (CC BY 4.0) unless otherwise noted.\n\n" +
        "The Phoxia name, wordmark, logo, and mascot (\"Lux\") are part of Phoxia's project identity. " +
        "Please do not use them in ways that imply endorsement or affiliation without prior written permission.",
    },
    {
      id: "open-source",
      title: "4. Open source projects",
      content:
        "Phoxia's software projects (phoxia-id, phoxia-watch, phoxia-tools, and others) are " +
        "distributed under their own licenses, typically AGPLv3. Visiting phoxia.org does not " +
        "grant any additional license to those projects beyond what is stated in each project's " +
        "repository.\n\n" +
        "Contributions to Phoxia projects are subject to each project's contribution guidelines " +
        "and CLA (if applicable). See the individual repositories for details.",
    },
    {
      id: "third-party-links",
      title: "5. Third-party links",
      content:
        "phoxia.org links to external websites including GitHub, project documentation, and " +
        "developer resources. Phoxia is not responsible for the content, privacy practices, " +
        "security, or availability of those sites. " +
        "Links do not constitute endorsement unless explicitly stated.",
    },
    {
      id: "disclaimer",
      title: "6. Disclaimer of warranties",
      content:
        "phoxia.org is provided \"as is\" and \"as available,\" without warranty of any kind, " +
        "express or implied. Phoxia does not warrant that the website will be error-free, " +
        "uninterrupted, secure, or accurate at all times.\n\n" +
        "Information about Phoxia's projects is provided for informational purposes only " +
        "and may not reflect the most current state of any project.",
    },
    {
      id: "limitation-of-liability",
      title: "7. Limitation of liability",
      content:
        "To the fullest extent permitted by applicable law, Phoxia and its contributors shall " +
        "not be liable for any indirect, incidental, special, consequential, or punitive damages " +
        "arising from your use of or inability to use phoxia.org, even if advised of the " +
        "possibility of such damages.\n\n" +
        "This limitation applies regardless of the theory of liability: contract, tort, " +
        "negligence, strict liability, or otherwise.",
    },
    {
      id: "governing-law",
      title: "8. Governing law",
      content:
        "These terms are governed by the laws of Brazil. The Brazilian Data Protection " +
        "Authority (ANPD) has jurisdiction over privacy matters under the LGPD " +
        "(Lei Geral de Proteção de Dados, Law No. 13.709/2018).\n\n" +
        "For users located in the European Union, we make reasonable efforts to comply with " +
        "the GDPR. For users located in other jurisdictions, we make reasonable efforts to " +
        "comply with applicable local law.",
    },
    {
      id: "changes",
      title: "9. Changes to these terms",
      content:
        "We may update these terms at any time. Material changes will be announced in our " +
        "public GitHub repository (github.com/phoxia/phoxia-org) at least 14 days before " +
        "taking effect. The \"last updated\" date at the top of this page reflects the most " +
        "recent revision.\n\n" +
        "Continued use of phoxia.org after changes take effect constitutes acceptance of " +
        "the revised terms.",
    },
    {
      id: "contact",
      title: "10. Contact",
      content:
        "Questions about these terms: legal@phoxia.org\n" +
        "Privacy inquiries: privacy@phoxia.org\n" +
        "General contact: contact@phoxia.org",
    },
  ];

  const ptSections: Section[] = [
    {
      id: "about",
      title: "1. Sobre o phoxia.org",
      content:
        "phoxia.org é o site institucional público da Phoxia, um coletivo de software open source " +
        "que constrói ferramentas transparentes e úteis, para desenvolvedores e para o público em geral. O site disponibiliza informações sobre " +
        "os projetos, princípios e relatórios de transparência da Phoxia.\n\n" +
        "phoxia.org não oferece serviços pagos, assinaturas ou contas de usuário. " +
        "Os projetos de software individuais da Phoxia possuem seus próprios termos e acordos de licença.",
    },
    {
      id: "acceptable-use",
      title: "2. Uso aceitável",
      content:
        "Você pode usar o phoxia.org para qualquer finalidade lícita. Você não pode:\n\n" +
        "Tentar obter acesso não autorizado a qualquer servidor ou sistema associado ao phoxia.org.\n" +
        "Interferir na disponibilidade do site (ex.: ataques de negação de serviço).\n" +
        "Usar ferramentas automatizadas para raspar ou indexar o site de forma que degrade " +
        "a performance para outros usuários.\n" +
        "Personificar a Phoxia ou seus colaboradores em qualquer comunicação.\n" +
        "Usar o phoxia.org para distribuir malware, spam ou conteúdo ilegal.",
    },
    {
      id: "intellectual-property",
      title: "3. Propriedade intelectual",
      content:
        "O código-fonte do phoxia.org é licenciado sob a GNU Affero General Public License v3.0 " +
        "(AGPLv3). Você pode usar, estudar, modificar e distribuí-lo sob os termos dessa licença. " +
        "O texto completo da licença está disponível em nosso repositório no GitHub.\n\n" +
        "Conteúdo escrito (posts de blog, documentação) é licenciado sob Creative Commons " +
        "Atribuição 4.0 Internacional (CC BY 4.0), salvo indicação em contrário.\n\n" +
        "O nome Phoxia, logotipo e mascote (\"Lux\") fazem parte da identidade do projeto Phoxia. " +
        "Por favor, não os utilize de forma que implique endosso ou afiliação sem autorização prévia e por escrito.",
    },
    {
      id: "open-source",
      title: "4. Projetos open source",
      content:
        "Os projetos de software da Phoxia (phoxia-id, phoxia-watch, phoxia-tools e outros) são " +
        "distribuídos sob suas próprias licenças, geralmente AGPLv3. Visitar o phoxia.org não " +
        "concede nenhuma licença adicional a esses projetos além do que está declarado em cada " +
        "repositório.\n\n" +
        "Contribuições para projetos Phoxia estão sujeitas às diretrizes de contribuição de cada " +
        "projeto e ao CLA (se aplicável). Consulte os repositórios individuais para mais detalhes.",
    },
    {
      id: "third-party-links",
      title: "5. Links de terceiros",
      content:
        "phoxia.org possui links para sites externos, incluindo GitHub, documentação de projetos " +
        "e recursos para desenvolvedores. A Phoxia não é responsável pelo conteúdo, práticas de " +
        "privacidade, segurança ou disponibilidade desses sites. " +
        "Links não constituem endosso, salvo quando explicitamente declarado.",
    },
    {
      id: "disclaimer",
      title: "6. Isenção de garantias",
      content:
        "phoxia.org é fornecido \"como está\" e \"conforme disponível\", sem garantia de qualquer " +
        "tipo, expressa ou implícita. A Phoxia não garante que o site será livre de erros, " +
        "ininterrupto, seguro ou preciso em todos os momentos.\n\n" +
        "As informações sobre os projetos da Phoxia são fornecidas apenas para fins informativos " +
        "e podem não refletir o estado mais atual de nenhum projeto.",
    },
    {
      id: "limitation-of-liability",
      title: "7. Limitação de responsabilidade",
      content:
        "Na máxima extensão permitida pela lei aplicável, a Phoxia e seus colaboradores não serão " +
        "responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou " +
        "punitivos decorrentes do uso ou da impossibilidade de uso do phoxia.org, mesmo que " +
        "tenham sido avisados da possibilidade de tais danos.\n\n" +
        "Essa limitação se aplica independentemente da teoria de responsabilidade: contrato, " +
        "ato ilícito, negligência, responsabilidade objetiva ou outra.",
    },
    {
      id: "governing-law",
      title: "8. Lei aplicável",
      content:
        "Estes termos são regidos pelas leis do Brasil. A Autoridade Nacional de Proteção de " +
        "Dados (ANPD) tem jurisdição sobre questões de privacidade nos termos da LGPD " +
        "(Lei Geral de Proteção de Dados, Lei nº 13.709/2018).\n\n" +
        "Para usuários localizados na União Europeia, envidamos esforços razoáveis para cumprir " +
        "o GDPR. Para usuários em outras jurisdições, envidamos esforços razoáveis para cumprir " +
        "a legislação local aplicável.",
    },
    {
      id: "changes",
      title: "9. Alterações nestes termos",
      content:
        "Podemos atualizar estes termos a qualquer momento. Mudanças relevantes serão anunciadas " +
        "em nosso repositório público no GitHub (github.com/phoxia/phoxia-org) pelo menos 14 dias " +
        "antes de entrarem em vigor. A data de \"última atualização\" no topo desta página reflete " +
        "a revisão mais recente.\n\n" +
        "O uso contínuo do phoxia.org após as mudanças entrarem em vigor constitui aceitação " +
        "dos termos revisados.",
    },
    {
      id: "contact",
      title: "10. Contato",
      content:
        "Dúvidas sobre estes termos: legal@phoxia.org\n" +
        "Questões de privacidade: privacy@phoxia.org\n" +
        "Contato geral: contact@phoxia.org",
    },
  ];

  const sections = $derived(lang === "pt-BR" ? ptSections : enSections);
  const lastUpdated = $derived(
    lang === "pt-BR"
      ? "Última atualização: 27 de junho de 2026 · Versão 1.0"
      : "Last updated: June 27, 2026 · Version 1.0",
  );
</script>

<svelte:head>
  <title>Phoxia • {locale.termsPage.title}</title>
  <meta
    name="description"
    content="Terms of service for phoxia.org: acceptable use, intellectual property, AGPLv3 licensing, and governing law."
  />
  <meta property="og:title" content="Phoxia • {locale.termsPage.title}" />
  <meta
    property="og:description"
    content="Terms of service for phoxia.org: acceptable use, intellectual property, AGPLv3 licensing, and governing law."
  />
  <meta property="og:url" content="https://phoxia.org/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:title" content="Phoxia • {locale.termsPage.title}" />
  <meta
    name="twitter:description"
    content="Terms of service for phoxia.org: acceptable use, intellectual property, AGPLv3 licensing, and governing law."
  />
  <link rel="canonical" href="https://phoxia.org/terms" />
</svelte:head>

<LegalPage
  title={locale.termsPage.title}
  icon={Scale}
  {lastUpdated}
  tocLabel={locale.common.tocLabel}
  {sections}
/>
