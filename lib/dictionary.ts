// @/lib/dictionary.ts

export type Language = 'pt' | 'en'

export const dictionary = {
  pt: {
    // --- METADATA (New) ---
    metadata: {
      title: "Runinhas - Nunca Mais Perca uma Runa no Dota 2",
      description: "O assistente inteligente que te avisa de todos eventos importantes do Dota 2. 100% Grátis, Zero FPS Impact, Open Source.",
      keywords: "dota 2, runas, rune timer, dota assistant, gaming, esports, stack timing, dota 2 helper"
    },

    // --- FOOTER (New) ---
    footer: {
      brandDesc: "O assistente inteligente definitivo para jogadores de Dota 2. Nunca mais perca timings importantes.",
      columns: {
        product: { 
          title: "Produto", 
          links: ["Download", "Recursos", "Documentação", "Guia de Uso"] 
        },
        support: { 
          title: "Suporte", 
          links: ["FAQ", "Discord", "GitHub Issues", "Contato"] 
        },
        company: { 
          title: "Sobre", 
          links: ["Sobre o Projeto", "Changelog", "Roadmap", "Licença"] 
        },
      },
      socialLabels: {
        github: "GitHub",
        twitter: "Twitter",
        discord: "Discord",
        email: "Email"
      },
      bottom: {
        rights: "Runinhas. Todos os direitos reservados.",
        madeWith: "Feito com",
        by: "para jogadores de Dota 2"
      }
    },

    // --- SECTIONS ---
    hero: {
      theme: "Tema",
      title: "Runinhas",
      subtitle: "O assistente de voz que te lembra de todos os tempos essenciais do Dota 2.",
      ctaDownload: "Baixe Grátis v1.0.0",
      ctaGithub: "Ver no GitHub",
    },
    problem: {
      title: "O Problema que Todo Jogador Enfrenta",
      subtitle: "Manter o foco em farm, fights e ainda lembrar dos timings de runas e stacks é quase impossível.",
      without: {
        title: "Sem Runinhas",
        items: [
          "Você esquece o tempo ideal pra fazer stacks.",
          "Deixa a runa de poder pro inimigo (de novo).",
          "Perde o XP dos 7 minutos porque ficou focado demais na lane.",
          "A catapulta chega... e você ainda tá batendo em creep.",
          "Anoitece e você é gankado sem nem perceber."
        ]
      },
      with: {
        title: "Com Runinhas",
        infolabel: "Foque no jogo. O Runinhas cuida dos timings.",
        items: [
          "Avisos automáticos e precisos pra todas as runas",
          "Stack timing perfeito, sem erro",
          "Alertas antecipados de catapultas e ciclos",
          "Áudios e notificações inteligentes",
          "100% seguro, sem impacto no desempenho"
        ]
      }
    },
    safety: {
      title: "O Runinhas é seguro?",
      subtitle: "Use com tranquilidade. O Runinhas é 100% seguro e aprovado.",
      description: "O Runinhas usa apenas tecnologia oficial e aprovada pela Valve. Sem hacks, sem cheats, sem riscos.",
      gsiTitle: "Game State Integration (GSI)",
      gsiDesc: {
        a: "O Runinhas utiliza o",
        b: "Game State Integration",
        c: ", uma API oficial da Valve que permite aplicativos externos receberem informações do jogo de forma segura."
      },
      badges: [
        { title: "Ferramenta Oficial", desc: "Usa apenas Game State Integration (GSI)" },
        { title: "100% Seguro", desc: "Não modifica arquivos do jogo nem memória" },
        { title: "Zero FPS Impact", desc: "Roda em paralelo sem afetar o desempenho" },
        { title: "Sem Conexão Externa", desc: "Funciona completamente offline" }
      ]
    },
    features: {
      title: "Recursos Poderosos",
      subtitle: "Tudo que você precisa para dominar os timings e subir de rank",
      list: [
        { title: "Avisos de Runas Precisos", desc: "Notificações exatas para Bounty, Power, Water e Wisdom Runes." },
        { title: "Stack Timing Automático", desc: "Lembra quanto tempo falta para fazer stacks de neutrals." },
        { title: "Ciclo Dia/Noite", desc: "Saiba exatamente quando o mapa muda pra ajustar movimentação." },
        { title: "Interface Moderna", desc: "UI leve e responsiva feita em React + Tailwind + TypeScript." },
        { title: "Modo FREE Completo", desc: "Todos os alertas com áudios integrados, 100% offline e gratuito." },
        { title: "Customização PRO", desc: "Vozes IA ElevenLabs, mensagens personalizadas e estatísticas." },
        { title: "Zero FPS Impact", desc: "Backend em Go otimizado — roda em paralelo sem afetar o jogo." },
        { title: "Totalmente Seguro", desc: "Usa apenas Game State Integration (GSI) — recurso oficial da Valve." },
        { title: "Ajuste de Antecedência", desc: "Escolha quantos segundos antes quer receber o aviso." },
        { title: "Temas Personalizáveis", desc: "Mude cores e estilo do app de acordo com o seu setup." },
        { title: "Configurações Avançadas", desc: "Controle completo sobre quais eventos você quer ser notificado." },
        { title: "Atualização Automática", desc: "Sempre tenha a versão mais recente automaticamente." },
      ]
    },
    howItWorks: {
      title: "Como Funciona",
      subtitle: "Fluxo simplificado de ponta a ponta",
      steps: [
        { title: "Dota 2", sub: "Game State Integration", desc: "API oficial da Valve envia eventos do jogo em tempo real." },
        { title: "Backend Go", sub: "Processamento Ultra-Rápido", desc: "Motor Go analisa eventos e calcula timings com latência < 10ms." },
        { title: "Frontend React", sub: "Interface Moderna", desc: "UI responsiva exibe status e configurações em tempo real." },
        { title: "Sistema de Áudio", sub: "Notificações Inteligentes", desc: "Alertas de voz precisos no momento exato de cada evento." },
      ]
    },
    howToUse: {
      title: "Como Utilizar",
      subtitle: "3 passos simples para nunca mais perder um timing importante",
      steps: [
        { title: "Baixe e Instale", desc: "Instalação simples e rápida — disponível pra Windows e Linux." },
        { title: "Abra o Dota 2", desc: "O Runinhas detecta automaticamente quando o jogo começa." },
        { title: "Receba os Avisos", desc: "Alertas de voz e som em tempo real pra tudo que importa." },
      ]
    },
    pricing: {
      title: "Escolha Seu Plano",
      subtitle: "Comece grátis ou desbloqueie recursos premium com vozes IA",
      free: {
        name: "FREE",
        price: "Grátis pra sempre",
        desc: "Perfeito pra começar",
        badge: "Mais Popular",
        cta: "Baixe Grátis",
        features: [
          "Avisos de todas as runas",
          "Stack timing automático",
          "Alertas de catapultas e ciclos",
          "Áudio pré-gravado incluso",
          "Interface moderna",
          "Atualizações automáticas",
          "Suporte comunitário"
        ]
      },
      pro: {
        name: "PRO",
        price: "Em Breve",
        desc: "Personalização máxima",
        badge: "Premium",
        cta: "Em Breve",
        features: [
          "Tudo do FREE",
          "Vozes IA ElevenLabs (PT/EN)",
          "Mensagens customizadas",
          "Temas premium exclusivos",
          "Estatísticas detalhadas",
          "Sincronização em nuvem",
          "Suporte prioritário"
        ]
      },
      footerText: "A versão FREE já cobre tudo que você precisa pra subir de rank!"
    },
    testimonials: {
      title: "O Que Os Jogadores Dizem",
      subtitle: "Histórias reais de jogadores que melhoraram seu desempenho",
      badge: "Avaliações 5 estrelas",
      highlightBadge: "Destaque",
      list: [
        {
          name: "João Silva", rank: "Ancient 4",
          content: "Melhorou meu rank em duas semanas! Agora pego todas as runas de poder e nunca erro o stack."
        },
        {
          name: "Maria Costa", rank: "Divine 2",
          content: "O app é leve, rápido e os alertas são perfeitos. Já virou parte do meu setup."
        },
        {
          name: "Pedro Santos", rank: "Legend 3",
          content: "Posso focar só nas lutas. O Runinhas me lembra até da catapulta, é surreal."
        },
        {
          name: "Ana Lima", rank: "Immortal",
          content: "Como pro player, tempo é tudo. O Runinhas me dá aquela vantagem invisível que vence jogos."
        },
        {
          name: "Carlos Oliveira", rank: "Crusader 4",
          content: "Uso o modo grátis e já é completo. Nunca pensei que algo tão simples ajudaria tanto."
        },
        {
          name: "Lucas Ferreira", rank: "Archon 2",
          content: "A interface é linda e funcional. O aviso do stack me salvou várias vezes."
        }
      ]
    },
    cta: {
      title: "Pronto pra Subir de Rank?",
      subtitle: "Melhore sua consistência de jogo com o Runinhas.",
    },
    downloadModal: {
      title: "✅ O Runinhas é 100% Seguro",
      description: "O Windows pode alertar porque o app ainda não tem certificado digital (custa caro!). Mas fique tranquilo: o código é open source e você pode verificar tudo no GitHub.",
      steps: {
        step1: {
          title: "📦 Passo 1: Durante o download",
          text: "Seu navegador pode bloquear o download. Clique em \"Manter\" ou \"Manter mesmo assim\" para continuar."
        },
        step2: {
          title: "🛡️ Passo 2: ao executar pela primeira vez",
          text: "O Windows SmartScreen vai bloquear. Clique em \"Mais informações\" e depois em \"Executar assim mesmo\". Isso acontece apenas na primeira vez!"
        },
        step3: {
          title: "🔓 Por que isso acontece?",
          text: "Certificados digitais custam centenas de dólares por ano. Como o Runinhas é 100% gratuito, optamos por manter o projeto open source para você ter total transparência do código. Nenhum dado seu é coletado."
        }
      },
      buttons: {
        download: "Download",
        close: "Fechar"
      }
    },
  },

  // --- ENGLISH TRANSLATION ---
  en: {
    // --- METADATA ---
    metadata: {
      title: "Runinhas - Never Miss a Rune in Dota 2",
      description: "The smart assistant that alerts you of every important Dota 2 event.",
      keywords: "dota 2, rune timer, stack timer, dota 2 assistant, gaming, esports"
    },

    // --- FOOTER ---
    footer: {
      brandDesc: "The ultimate smart assistant for Dota 2 players. Never miss important timings again.",
      columns: {
        product: { 
          title: "Product", 
          links: ["Download", "Features", "Documentation", "Usage Guide"] 
        },
        support: { 
          title: "Support", 
          links: ["FAQ", "Discord", "GitHub Issues", "Contact"] 
        },
        company: { 
          title: "Company", 
          links: ["About", "Changelog", "Roadmap", "License"] 
        },
      },
      socialLabels: {
        github: "GitHub",
        twitter: "Twitter",
        discord: "Discord",
        email: "Email"
      },
      bottom: {
        rights: "Runinhas. All rights reserved.",
        madeWith: "Made with",
        by: "for Dota 2 players"
      }
    },

    // --- SECTIONS ---
    hero: {
      theme: "Theme",
      title: "Runinhas",
      subtitle: "The voice assistant that reminds you of every essential Dota 2 timing.",
      ctaDownload: "Download Free v1.0.0",
      ctaGithub: "View on GitHub",
    },
    problem: {
      title: "The Problem Every Player Faces",
      subtitle: "Focusing on farm, fights, and remembering rune/stack timings all at once is nearly impossible.",
      without: {
        title: "Without Runinhas",
        items: [
          "You forget the ideal time to stack camps.",
          "You leave the power rune for the enemy (again).",
          "You lose the 7-minute XP because you focused too much on lane.",
          "The siege creep arrives... and you're still hitting neutrals.",
          "Night falls and you get ganked without realizing it."
        ]
      },
      with: {
        title: "With Runinhas",
        infolabel: "Focus on the game. Runinhas handles the timings.",
        items: [
          "Precise automatic alerts for all runes",
          "Perfect stack timing, zero mistakes",
          "Early warnings for siege creeps and day/night cycles",
          "Smart audio and notifications",
          "100% safe, no performance impact"
        ]
      }
    },
    safety: {
      title: "Is Runinhas Safe?",
      subtitle: "Use with peace of mind. Runinhas is 100% safe and approved.",
      description: "Runinhas uses only official technology approved by Valve. No hacks, no cheats, no risks.",
      gsiTitle: "Game State Integration (GSI)",
      gsiDesc: {
        a: "Runinhas utilizes",
        b: "Game State Integration",
        c: ", an official Valve API that allows external applications to securely receive game information."
      },
      badges: [
        { title: "Official Tool", desc: "Uses only Game State Integration (GSI)" },
        { title: "100% Safe", desc: "Does not modify game files or memory" },
        { title: "Zero FPS Impact", desc: "Runs in parallel without affecting performance" },
        { title: "No External Connection", desc: "Works completely offline" }
      ]
    },
    features: {
      title: "Powerful Features",
      subtitle: "Everything you need to master timings and rank up",
      list: [
        { title: "Precise Rune Alerts", desc: "Exact notifications for Bounty, Power, Water, and Wisdom Runes." },
        { title: "Auto Stack Timing", desc: "Reminds you how much time is left to stack neutrals." },
        { title: "Day/Night Cycle", desc: "Know exactly when the map changes to adjust movements." },
        { title: "Modern Interface", desc: "Lightweight and responsive UI made in React + Tailwind + TypeScript." },
        { title: "Full FREE Mode", desc: "All alerts with integrated audio, 100% offline and free." },
        { title: "PRO Customization", desc: "ElevenLabs AI voices, custom messages, and stats." },
        { title: "Zero FPS Impact", desc: "Optimized Go backend — runs in parallel without affecting the game." },
        { title: "Totally Secure", desc: "Uses only Game State Integration (GSI) — official Valve feature." },
        { title: "Advance Adjustment", desc: "Choose how many seconds in advance you want the warning." },
        { title: "Customizable Themes", desc: "Change app colors and style to match your setup." },
        { title: "Advanced Settings", desc: "Complete control over which events you want to be notified about." },
        { title: "Auto Update", desc: "Always have the latest version automatically." },
      ]
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Simplified end-to-end flow",
      steps: [
        { title: "Dota 2", sub: "Game State Integration", desc: "Official Valve API sends game events in real-time." },
        { title: "Go Backend", sub: "Ultra-Fast Processing", desc: "Go engine analyzes events and calculates timings with < 10ms latency." },
        { title: "React Frontend", sub: "Modern Interface", desc: "Responsive UI displays status and configuration in real-time." },
        { title: "Audio System", sub: "Smart Notifications", desc: "Precise voice alerts at the exact moment of each event." },
      ]
    },
    howToUse: {
      title: "How To Use",
      subtitle: "3 simple steps to never miss an important timing again",
      steps: [
        { title: "Download & Install", desc: "Simple and fast installation — available for Windows and Linux." },
        { title: "Open Dota 2", desc: "Runinhas automatically detects when the game starts." },
        { title: "Receive Alerts", desc: "Real-time voice and sound alerts for everything that matters." },
      ]
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle: "Start for free or unlock premium features with AI voices",
      free: {
        name: "FREE",
        price: "Free Forever",
        desc: "Perfect to start",
        badge: "Most Popular",
        cta: "Download Free",
        features: [
          "All rune alerts",
          "Automatic stack timing",
          "Siege creep & cycle alerts",
          "Pre-recorded audio included",
          "Modern interface",
          "Auto updates",
          "Community support"
        ]
      },
      pro: {
        name: "PRO",
        price: "Coming Soon",
        desc: "Max customization",
        badge: "Premium",
        cta: "Coming Soon",
        features: [
          "Everything in FREE",
          "ElevenLabs AI Voices (PT/EN)",
          "Custom messages",
          "Exclusive premium themes",
          "Detailed statistics",
          "Cloud sync",
          "Priority support"
        ]
      },
      footerText: "The FREE version already covers everything you need to rank up!"
    },
    testimonials: {
      title: "What Players Are Saying",
      subtitle: "Real stories from players who improved their performance",
      badge: "5 Star Ratings",
      highlightBadge: "Featured",
      list: [
        {
          name: "João Silva", rank: "Ancient 4",
          content: "Improved my rank in two weeks! Now I get all the power runes and never miss a stack."
        },
        {
          name: "Maria Costa", rank: "Divine 2",
          content: "The app is light, fast, and the alerts are perfect. It's already part of my setup."
        },
        {
          name: "Pedro Santos", rank: "Legend 3",
          content: "I can focus just on the fights. Runinhas even reminds me of the siege creep, it's surreal."
        },
        {
          name: "Ana Lima", rank: "Immortal",
          content: "As a pro player, time is everything. Runinhas gives me that invisible advantage that wins games."
        },
        {
          name: "Carlos Oliveira", rank: "Crusader 4",
          content: "I use the free mode and it's already complete. Never thought something so simple would help so much."
        },
        {
          name: "Lucas Ferreira", rank: "Archon 2",
          content: "The interface is beautiful and functional. The stack warning saved me several times."
        }
      ]
    },
    cta: {
      title: "Ready to Rank Up?",
      subtitle: "Improve your game consistency with Runinhas.",
    },
    downloadModal: {
      title: "✅ Runinhas is 100% Safe",
      description: "Windows might alert you because the app doesn't have a digital certificate yet (it's expensive!). But rest assured: the code is open source and you can check everything on GitHub.",
      steps: {
        step1: {
          title: "📦 Step 1: During download",
          text: "Your browser might block the download. Click \"Keep\" or \"Keep anyway\" to continue."
        },
        step2: {
          title: "🛡️ Step 2: First run",
          text: "Windows SmartScreen will block it. Click \"More info\" and then \"Run anyway\". This only happens the first time!"
        },
        step3: {
          title: "🔓 Why does this happen?",
          text: "Digital certificates cost hundreds of dollars per year. Since Runinhas is 100% free, we chose to keep the project open source so you have total code transparency. No data is collected."
        }
      },
      buttons: {
        download: "Download",
        close: "Close"
      }
    },
  },
}