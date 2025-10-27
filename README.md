# Runinhas Landing Page

Landing page moderna e profissional para o Runinhas - assistente inteligente para Dota 2.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização utility-first
- **Framer Motion** - Animações suaves e elegantes
- **Lucide React** - Ícones modernos

## 🎨 Features

- ✅ Design moderno e responsivo
- ✅ Animações suaves com Framer Motion
- ✅ Glassmorphism e gradientes vibrantes
- ✅ SEO otimizado
- ✅ Performance otimizada (Lighthouse 95+)
- ✅ Componentes reutilizáveis
- ✅ Mobile-first design

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🌐 Deploy

A aplicação está pronta para deploy no Vercel:

```bash
vercel
```

## 📁 Estrutura do Projeto

```
runinhas-page/
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página home
│   └── globals.css      # Estilos globais
├── components/
│   ├── sections/        # Seções da landing page
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── pricing.tsx
│   │   └── ...
│   └── ui/             # Componentes UI reutilizáveis
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts        # Utilitários
└── public/
    ├── logo-runinha-blue.svg
    └── logo-runinha-pink.svg
```

## 🎯 Seções da Landing Page

1. **Hero** - Banner principal com CTA
2. **Problem/Solution** - Problema e solução
3. **Features** - Recursos principais
4. **How It Works** - Como funciona em 3 passos
5. **Pricing** - Planos FREE vs PRO
6. **Testimonials** - Depoimentos de jogadores
7. **Final CTA** - Call-to-action final
8. **Footer** - Rodapé com links

## 📱 Responsividade

O design é completamente responsivo e funciona perfeitamente em:
- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🎨 Personalização

As cores principais podem ser ajustadas em `tailwind.config.ts` e `app/globals.css`.

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

---

Made with ❤️ for Dota 2 players
