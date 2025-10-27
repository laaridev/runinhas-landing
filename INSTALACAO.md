# 🚀 Guia de Instalação - Runinhas Landing Page

## Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn

## Instalação

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em modo de desenvolvimento

```bash
npm run dev
```

O site estará disponível em: http://localhost:3000

### 3. Build para produção

```bash
npm run build
npm start
```

## Deploy

### Deploy no Vercel (Recomendado)

1. Instale o Vercel CLI:
```bash
npm install -g vercel
```

2. Execute o deploy:
```bash
vercel
```

3. Siga as instruções na tela

### Deploy Manual

1. Faça o build:
```bash
npm run build
```

2. Os arquivos estarão na pasta `.next`

3. Você pode usar qualquer servidor que suporte Next.js

## Estrutura de Pastas

```
runinhas-page/
├── app/              # Páginas e layouts (App Router)
├── components/       # Componentes React
│   ├── sections/    # Seções da landing page
│   └── ui/          # Componentes UI reutilizáveis
├── lib/             # Utilitários
├── public/          # Assets estáticos (imagens, SVGs)
└── ...config files  # Configurações do projeto
```

## Personalizações

### Cores
Edite as cores em `tailwind.config.ts` e `app/globals.css`

### Conteúdo
Os textos estão nos arquivos dentro de `components/sections/`

### Imagens
Adicione suas imagens na pasta `public/`

## Problemas Comuns

### Erro de módulo não encontrado
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 já em uso
```bash
npm run dev -- -p 3001
```

## Suporte

Para dúvidas ou problemas:
- Abra uma issue no GitHub
- Entre no Discord da comunidade

---

Boa sorte com seu projeto! 🎮
