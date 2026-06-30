<script lang="ts">
  import LegalPage from "$lib/components/legal-page.svelte";
  import { Lock } from "$lib/icons";
  import { t, getLang } from "$lib/i18n/i18n.svelte";

  let locale = $derived(t());
  let lang = $derived(getLang());

  type Section = { id: string; title: string; content: string };

  const enSections: Section[] = [
    {
      id: "who-we-are",
      title: "1. Who we are",
      content:
        "Phoxia is an open-source software collective building transparent and useful tools, " +
        "for developers and general audiences alike. phoxia.org is our public institutional website. " +
        "All source code is available at github.com/phoxia under AGPLv3.\n\n" +
        "Data controller: Phoxia (operated by Lucas Christian).\n" +
        "Contact: privacy@phoxia.org",
    },
    {
      id: "what-we-collect",
      title: "2. What we collect",
      content:
        "Server logs: standard web server logs including IP address, request path, HTTP status " +
        "code, and timestamp. Retained for 30 days for security and operational purposes. " +
        "IP addresses are not linked to any personal profile and are not shared.\n\n" +
        "That's it. phoxia.org has no user accounts, no contact form, and no payment features. " +
        "If you reach out to us directly via email or Discord, any information you share in " +
        "that message is handled by those platforms under their own privacy policies.",
    },
    {
      id: "never-collect",
      title: "3. What we NEVER collect",
      content:
        "No tracking cookies or browser fingerprinting.\n" +
        "No third-party analytics (no Google Analytics, no Hotjar, no Plausible).\n" +
        "No advertising or behavioral targeting of any kind.\n" +
        "No account data: phoxia.org has no user accounts.\n" +
        "No payment information: phoxia.org has no paid features.\n" +
        "No cross-site tracking.",
    },
    {
      id: "how-we-use",
      title: "4. How we use your data",
      content:
        "Server logs are used solely to diagnose errors, investigate abuse, and monitor uptime. " +
        "They are not linked to individuals beyond what is technically necessary and are never " +
        "sold, shared, or used for any commercial purpose.",
    },
    {
      id: "where-data-lives",
      title: "5. Where your data lives",
      content:
        "phoxia.org infrastructure runs across services operated by Phoxia maintainers. " +
        "Server logs are retained within these systems and not transferred to any third-party processor for commercial purposes.",
    },
    {
      id: "retention",
      title: "6. Retention and deletion",
      content:
        "Server logs: 30-day rolling window, automatically purged.\n\n" +
        "To request deletion of any server log data associated with your IP address, " +
        "email privacy@phoxia.org. We will confirm deletion within 7 business days.",
    },
    {
      id: "security",
      title: "7. Security",
      content:
        "All connections to phoxia.org use TLS 1.3. " +
        "Server access is restricted to authorized maintainers via SSH key authentication " +
        "and additional network-level controls. " +
        "No passwords are stored on phoxia.org (there are no user accounts).\n\n" +
        "To report a security vulnerability: security@phoxia.org. We respond within 72 hours.",
    },
    {
      id: "rights",
      title: "8. Your rights (LGPD / GDPR)",
      content:
        "Regardless of where you are located, you have the right to:\n\n" +
        "Access: request a copy of any data we hold about you.\n" +
        "Rectification: request correction of inaccurate data.\n" +
        "Deletion: request deletion of your data at any time.\n" +
        "Portability: receive your data in a structured, machine-readable format.\n" +
        "Objection: object to processing based on legitimate interest.\n" +
        "Complaint: file a complaint with the ANPD (Brazil: gov.br/anpd), " +
        "the ICO (UK), or the DPA of your EU member state.\n\n" +
        "To exercise any of these rights: privacy@phoxia.org.",
    },
    {
      id: "changes",
      title: "9. Changes to this policy",
      content:
        "Material changes will be announced in our public GitHub repository " +
        "(github.com/phoxia/phoxia-org) at least 14 days before taking effect. " +
        "The \"last updated\" date at the top of this page reflects the most recent revision.",
    },
    {
      id: "contact",
      title: "10. Contact",
      content:
        "Privacy inquiries: privacy@phoxia.org\n" +
        "Security vulnerabilities: security@phoxia.org\n" +
        "General contact: contact@phoxia.org\n" +
        "ANPD (Brazil): gov.br/anpd",
    },
  ];

  const ptSections: Section[] = [
    {
      id: "who-we-are",
      title: "1. Quem somos",
      content:
        "A Phoxia é um coletivo de software open source que constrói ferramentas transparentes e úteis, " +
        "para desenvolvedores e para o público em geral. phoxia.org é o nosso site institucional público. " +
        "Todo o código-fonte está disponível em github.com/phoxia sob a licença AGPLv3.\n\n" +
        "Controlador de dados: Phoxia (operado por Lucas Christian).\n" +
        "Contato: privacy@phoxia.org",
    },
    {
      id: "what-we-collect",
      title: "2. O que coletamos",
      content:
        "Logs do servidor: logs padrão do servidor web, incluindo endereço IP, caminho da " +
        "requisição, código de status HTTP e timestamp. Retidos por 30 dias para fins de " +
        "segurança e operação. Endereços IP não são vinculados a nenhum perfil pessoal " +
        "e não são compartilhados.\n\n" +
        "Só isso. phoxia.org não possui contas de usuário, formulário de contato nem recursos pagos. " +
        "Se você entrar em contato conosco diretamente por e-mail ou Discord, as informações " +
        "compartilhadas nessa mensagem ficam sujeitas às políticas de privacidade dessas plataformas.",
    },
    {
      id: "never-collect",
      title: "3. O que NUNCA coletamos",
      content:
        "Sem cookies de rastreamento ou fingerprinting de navegador.\n" +
        "Sem analytics de terceiros (sem Google Analytics, Hotjar ou Plausible).\n" +
        "Sem publicidade ou targeting comportamental de qualquer tipo.\n" +
        "Sem dados de conta: phoxia.org não possui contas de usuário.\n" +
        "Sem informações de pagamento: phoxia.org não possui recursos pagos.\n" +
        "Sem rastreamento cross-site.",
    },
    {
      id: "how-we-use",
      title: "4. Como usamos seus dados",
      content:
        "Os logs do servidor são utilizados exclusivamente para diagnosticar erros, investigar " +
        "abusos e monitorar a disponibilidade. Não são vinculados a indivíduos além do " +
        "tecnicamente necessário e nunca são vendidos, compartilhados ou utilizados para " +
        "qualquer finalidade comercial.",
    },
    {
      id: "where-data-lives",
      title: "5. Onde seus dados ficam",
      content:
        "A infraestrutura do phoxia.org opera em serviços gerenciados pelos mantenedores da Phoxia. " +
        "Os logs do servidor são retidos nesses sistemas e não são transferidos para processadores " +
        "terceiros para fins comerciais.",
    },
    {
      id: "retention",
      title: "6. Retenção e exclusão",
      content:
        "Logs do servidor: janela rotativa de 30 dias, purgados automaticamente.\n\n" +
        "Para solicitar a exclusão de dados de log associados ao seu endereço IP, " +
        "envie um e-mail para privacy@phoxia.org. Confirmaremos a exclusão em até 7 dias úteis.",
    },
    {
      id: "security",
      title: "7. Segurança",
      content:
        "Todas as conexões com phoxia.org utilizam TLS 1.3. " +
        "O acesso ao servidor é restrito a mantenedores autorizados via autenticação por chave SSH " +
        "e controles adicionais em nível de rede. " +
        "Nenhuma senha é armazenada em phoxia.org (não há contas de usuário).\n\n" +
        "Para reportar uma vulnerabilidade de segurança: security@phoxia.org. Respondemos em até 72 horas.",
    },
    {
      id: "rights",
      title: "8. Seus direitos (LGPD / GDPR)",
      content:
        "Independentemente de onde você estiver, você tem o direito de:\n\n" +
        "Acesso: solicitar uma cópia de quaisquer dados que mantemos sobre você.\n" +
        "Retificação: solicitar a correção de dados incorretos.\n" +
        "Exclusão: solicitar a exclusão dos seus dados a qualquer momento.\n" +
        "Portabilidade: receber seus dados em formato estruturado e legível por máquina.\n" +
        "Oposição: opor-se ao tratamento baseado em interesse legítimo.\n" +
        "Reclamação: registrar uma reclamação na ANPD (Brasil: gov.br/anpd), " +
        "ICO (Reino Unido) ou na autoridade de proteção de dados do seu país.\n\n" +
        "Para exercer qualquer desses direitos: privacy@phoxia.org.",
    },
    {
      id: "changes",
      title: "9. Alterações nesta política",
      content:
        "Mudanças relevantes serão anunciadas em nosso repositório público no GitHub " +
        "(github.com/phoxia/phoxia-org) pelo menos 14 dias antes de entrarem em vigor. " +
        "A data de \"última atualização\" no topo desta página reflete a revisão mais recente.",
    },
    {
      id: "contact",
      title: "10. Contato",
      content:
        "Questões de privacidade: privacy@phoxia.org\n" +
        "Vulnerabilidades de segurança: security@phoxia.org\n" +
        "Contato geral: contact@phoxia.org\n" +
        "ANPD (Brasil): gov.br/anpd",
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
  <title>Phoxia • {locale.privacyPage.title}</title>
  <meta
    name="description"
    content="How Phoxia collects, uses, and protects data on phoxia.org. No tracking. No ads. AGPLv3 open source."
  />
  <meta property="og:title" content="Phoxia • {locale.privacyPage.title}" />
  <meta
    property="og:description"
    content="How Phoxia collects, uses, and protects data on phoxia.org. No tracking. No ads. AGPLv3 open source."
  />
  <meta property="og:url" content="https://phoxia.org/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:title" content="Phoxia • {locale.privacyPage.title}" />
  <meta
    name="twitter:description"
    content="How Phoxia collects, uses, and protects data on phoxia.org. No tracking. No ads. AGPLv3 open source."
  />
  <link rel="canonical" href="https://phoxia.org/privacy" />
</svelte:head>

<LegalPage
  title={locale.privacyPage.title}
  icon={Lock}
  {lastUpdated}
  tocLabel={locale.common.tocLabel}
  {sections}
/>
