# 🛠️ Comandos Úteis - Runinhas Landing Page

## 🚀 Comandos Principais

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Iniciar em porta diferente
npm run dev -- -p 3001

# Limpar cache e reiniciar
rm -rf .next && npm run dev
```

### Build & Produção
```bash
# Criar build otimizado
npm run build

# Testar build localmente
npm run build && npm start

# Analisar bundle size
npm run build -- --profile
```

### Qualidade de Código
```bash
# Verificar erros de lint
npm run lint

# Fix automático de lint
npm run lint -- --fix

# Verificar tipos TypeScript
npx tsc --noEmit
```

---

## 📦 Gerenciamento de Dependências

### Instalar/Atualizar
```bash
# Instalar todas as dependências
npm install

# Instalar nova dependência
npm install nome-do-pacote

# Instalar como dev dependency
npm install -D nome-do-pacote

# Atualizar todas as dependências
npm update

# Verificar pacotes desatualizados
npm outdated
```

### Limpeza
```bash
# Remover node_modules e reinstalar
rm -rf node_modules package-lock.json && npm install

# Limpar cache do npm
npm cache clean --force

# Limpar cache do Next.js
rm -rf .next
```

---

## 🌐 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Build Manual
```bash
# Criar build
npm run build

# O output estará em .next/
# Upload para seu host preferido
```

### Docker (Opcional)
```bash
# Build image
docker build -t runinhas-landing .

# Run container
docker run -p 3000:3000 runinhas-landing
```

---

## 🔍 Debug & Testes

### Debug
```bash
# Modo debug do Node
NODE_OPTIONS='--inspect' npm run dev

# Ver variáveis de ambiente
npm run dev | grep NEXT_PUBLIC

# Analisar performance
npm run build -- --profile
```

### Testes (se configurado)
```bash
# Rodar testes
npm test

# Testes em watch mode
npm test -- --watch

# Coverage
npm test -- --coverage
```

---

## 🎨 Customização

### Adicionar Nova Seção
```bash
# 1. Criar componente
touch components/sections/minha-secao.tsx

# 2. Editar app/page.tsx e importar

# 3. Verificar no navegador
npm run dev
```

### Mudar Cores
```bash
# Editar Tailwind config
code tailwind.config.ts

# Editar CSS global
code app/globals.css

# Ver mudanças (hot reload automático)
```

### Adicionar Imagem
```bash
# Copiar para public/
cp ~/Downloads/imagem.png public/

# Usar no código:
# <Image src="/imagem.png" ... />
```

---

## 📊 Análise & Performance

### Lighthouse
```bash
# Instalar Lighthouse CLI
npm install -g lighthouse

# Rodar análise
lighthouse http://localhost:3000 --view

# Gerar relatório JSON
lighthouse http://localhost:3000 --output json --output-path ./report.json
```

### Bundle Analyzer
```bash
# Instalar
npm install -D @next/bundle-analyzer

# Configurar em next.config.js
# Rodar análise
ANALYZE=true npm run build
```

### Performance Profiling
```bash
# Build com profiling
npm run build -- --profile

# React DevTools Profiler
# Abrir no navegador com DevTools
```

---

## 🔧 Manutenção

### Atualizar Next.js
```bash
# Verificar versão atual
npx next --version

# Atualizar para latest
npm install next@latest react@latest react-dom@latest

# Testar
npm run dev
```

### Atualizar Todas as Dependências
```bash
# Instalar npm-check-updates
npm install -g npm-check-updates

# Ver atualizações disponíveis
ncu

# Atualizar package.json
ncu -u

# Instalar
npm install
```

### Limpar Projeto
```bash
# Remover arquivos temporários
rm -rf .next node_modules .turbo

# Reinstalar tudo
npm install

# Rebuild
npm run build
```

---

## 🐛 Troubleshooting

### Erro: Cannot find module
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro: Port 3000 in use
```bash
# Opção 1: Usar outra porta
npm run dev -- -p 3001

# Opção 2: Matar processo
lsof -ti:3000 | xargs kill -9
```

### Erro: Out of memory
```bash
# Aumentar memória do Node
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Cache corrompido
```bash
rm -rf .next
rm -rf node_modules/.cache
npm run dev
```

### TypeScript errors
```bash
# Verificar erros
npx tsc --noEmit

# Reiniciar TS Server (VS Code)
# Cmd+Shift+P -> "TypeScript: Restart TS Server"
```

---

## 🔐 Variáveis de Ambiente

### Criar arquivo .env.local
```bash
# Copiar exemplo
cp .env.local.example .env.local

# Editar
code .env.local

# Exemplo:
# NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
# NEXT_PUBLIC_API_URL=https://api.example.com
```

### Usar no código
```typescript
// Apenas variáveis com NEXT_PUBLIC_ são expostas ao browser
const gaId = process.env.NEXT_PUBLIC_GA_ID
```

---

## 📱 Testes de Responsividade

### Browser DevTools
```bash
# Chrome/Edge
# F12 -> Toggle device toolbar (Ctrl+Shift+M)

# Firefox
# F12 -> Responsive Design Mode (Ctrl+Shift+M)
```

### Ferramentas Online
```bash
# Abrir em diferentes dispositivos
# responsivedesignchecker.com
# whatismyscreenresolution.com
```

---

## 🚀 Scripts Personalizados

### Criar script dev com debug
```json
// package.json
"scripts": {
  "dev:debug": "NODE_OPTIONS='--inspect' next dev",
  "dev:turbo": "next dev --turbo",
  "analyze": "ANALYZE=true npm run build"
}
```

### Executar
```bash
npm run dev:debug
npm run dev:turbo
npm run analyze
```

---

## 📈 Monitoramento

### Vercel Analytics (se deployado)
```bash
# Instalar
npm install @vercel/analytics

# Adicionar em layout.tsx
# import { Analytics } from '@vercel/analytics/react'
```

### Google Analytics
```bash
# Adicionar script em layout.tsx ou criar component
```

---

## 🎯 Quick Actions

### Start Fresh
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Full Clean & Rebuild
```bash
rm -rf .next node_modules package-lock.json .turbo
npm install
npm run build
```

### Deploy to Vercel
```bash
vercel --prod
```

### View Production Build Locally
```bash
npm run build && npm start
```

---

## 💡 Atalhos VS Code

### Úteis para React/Next.js
```
Ctrl+Shift+P : Command Palette
Ctrl+P       : Quick Open File
Ctrl+B       : Toggle Sidebar
Ctrl+`       : Toggle Terminal
Alt+Click    : Multiple cursors

// Extensões recomendadas:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier
```

---

## 🎨 Dicas de Desenvolvimento

### Hot Reload não funciona?
```bash
# Aumentar limite de watchers (Linux)
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

### Acelerar Development
```bash
# Usar Turbopack (experimental)
npm run dev -- --turbo

# Desabilitar telemetry
npx next telemetry disable
```

### Otimizar Build
```bash
# Usar SWC compiler (padrão no Next.js 13+)
# Já está configurado por padrão

# Desabilitar source maps em produção (next.config.js)
# productionBrowserSourceMaps: false
```

---

## 📚 Recursos Adicionais

### Documentação Oficial
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TailwindCSS: https://tailwindcss.com/docs

### Comunidades
- Next.js Discord: https://discord.gg/nextjs
- Reddit: r/nextjs
- Stack Overflow: [nextjs] tag

### Learning Resources
- Next.js Learn: https://nextjs.org/learn
- React Docs: https://react.dev/learn
- Tailwind Play: https://play.tailwindcss.com

---

**💡 Dica:** Salve este arquivo nos seus favoritos para acesso rápido aos comandos!

---

Made with ❤️ for developers
